import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

import bottomImage from '../../../assets/Capture.png';
import { getAllTagsAfterEdit } from '../../services/editTagService';

class RenderProductScreen extends React.Component {
  constructor(props) {
    super(props);
    const { productData } = props;
    this.state = {
      productDetailsId: productData.productDetailsId,
      color: productData.color,
      colorScore: productData.colorScore,
      brand: productData.brand,
      brandScore: productData.brandScore,
      type: productData.type,
      typeScore: productData.typeScore,
      productPrice: productData.productPrice,
      error: ''
    };
  }

  // Handles onChangeText for input
  onInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  // Handles if tags are edited or not and navigates to appropriate view
  onPress = async () => {
    const { navigation } = this.props;
    const { productData } = this.props;
    const originalData = productData;
    const {
      productDetailsId,
      color,
      brand,
      type,
      colorScore,
      brandScore,
      typeScore,
      productPrice
    } = this.state;
    const editedProductTags = {
      productDetailsId,
      color,
      brand,
      type,
      colorScore,
      brandScore,
      typeScore,
      productPrice
    };

    const id = productDetailsId;
    // If there is no editing
    if (
      editedProductTags.color === originalData.color &&
      editedProductTags.type === originalData.type &&
      editedProductTags.brand === originalData.brand
    ) {
      if (color && brand && type !== '') {
        const tags = editedProductTags;
        navigation.navigate('FinalView', { tags });
      }
    }
    // If there is editing
    if (
      editedProductTags.color !== originalData.color ||
      editedProductTags.type !== originalData.type ||
      editedProductTags.brand !== originalData.brand
    ) {
      if (color && brand && type !== '') {
        const tags = await getAllTagsAfterEdit(editedProductTags, id);
        navigation.navigate('FinalView', { tags });
      } else {
        this.errorValidation();
      }
    }
  };

  // Error validation if input field is empty
  errorValidation() {
    this.setState({
      error: 'All fields are required!'
    });
  }

  render() {
    const { photoData } = this.props;
    const { productData } = this.props;
    const { color, brand, type, productPrice, error } = this.state;
    const scoreColor = `${(productData.colorScore * 100).toFixed(2)}%`;
    const scoreType = `${(productData.typeScore * 100).toFixed(2)}%`;
    const scoreBrand = `${(productData.brandScore * 100).toFixed(2)}%`;

    return (
      <View style={styles.screens}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Image source={{ uri: photoData }} style={styles.image} />
          <Card containerStyle={{ padding: 20 }}>
            <View style={styles.tagContainer}>
              <Text style={styles.product}>Color:</Text>
              <TextInput
                style={styles.tagItem}
                maxLength={20}
                name="color"
                defaultValue={color}
                clearButtonMode="while-editing"
                value={color}
                onChangeText={text => this.onInputHandler('color', text)}
              />
              <Text style={styles.scoreItem}>{`(${scoreColor})`}</Text>
            </View>
            <View style={styles.tagContainer}>
              <Text style={styles.product}>Type:</Text>
              <TextInput
                style={styles.tagItem}
                name="type"
                maxLength={20}
                defaultValue={type}
                clearButtonMode="while-editing"
                value={type}
                onChangeText={text => this.onInputHandler('type', text)}
              />
              <Text style={styles.scoreItem}>{`(${scoreType})`}</Text>
            </View>
            <View style={styles.tagContainer}>
              <Text style={styles.product}>Brand:</Text>
              <TextInput
                style={styles.tagItem}
                name="brand"
                maxLength={20}
                defaultValue={brand}
                clearButtonMode="while-editing"
                value={brand}
                onChangeText={text => this.onInputHandler('brand', text)}
              />
              <Text style={styles.scoreItem}>{`(${scoreBrand})`}</Text>
            </View>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.tagContainer}>
              <Text style={styles.priceTag}>Full Condition Price:</Text>
              <TextInput
                style={styles.priceItem}
                name="fullConditionPrice"
                maxLength={20}
                editable={false}
                defaultValue={`${productPrice.fullConditionPrice}`}
                clearButtonMode="while-editing"
                value={`${productPrice.fullConditionPrice}£`}
              />
            </View>
            <View style={styles.tagContainer}>
              <Text style={styles.priceTag}>Resale Price:</Text>
              <TextInput
                style={styles.priceItem}
                name="resalePrice"
                maxLength={20}
                editable={false}
                defaultValue={`${productPrice.resalePrice}`}
                clearButtonMode="while-editing"
                value={`${productPrice.resalePrice}£`}
              />
            </View>
          </Card>
          <TouchableOpacity
            style={styles.confirmContainer}
            name="register"
            onPress={() => this.onPress()}
          >
            <Text style={styles.confirmText}>Register Item</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Image style={styles.imageContainer} source={bottomImage} resizeMode="stretch" />
      </View>
    );
  }
}
export default RenderProductScreen;
