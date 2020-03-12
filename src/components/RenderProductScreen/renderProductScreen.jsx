/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';
import bottomImage from '../../../assets/Capture.png';

class RenderProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productTag: [
        {
          id: 1,
          color: 'Black',
          type: 'Sweatshirt',
          brand: 'Nike'
        }
      ]
    };
    this.editTag = this.editTag.bind(this);
  }

  editTag(newTag) {
    this.setState({
      productTag: newTag
    });
  }

  render() {
    const { navigation } = this.props;
    const image = navigation.state;
    const { productTag } = this.state;
    return (
      <View style={styles.screens}>
        <View>
          <Image source={{ uri: image.params.photo }} style={styles.image} />
          <Card containerStyle={{ padding: 20 }}>
            {productTag.map(tags => {
              return (
                <View key={tags.id}>
                  <View style={styles.tagContainer}>
                    <Text style={styles.product}>Color:</Text>
                    <TextInput
                      style={styles.tagItem}
                      maxLength={20}
                      placeholderTextColor="gray"
                      placeholder={tags.color}
                      autoCapitalize="none"
                      onPress={this.editTag}
                      value={this.color}
                    />
                  </View>
                  <View style={styles.tagContainer}>
                    <Text style={styles.product}>Type:</Text>
                    <TextInput
                      style={styles.tagItem}
                      maxLength={20}
                      placeholderTextColor="gray"
                      placeholder={tags.type}
                      autoCapitalize="none"
                      onPress={this.editTag}
                      value={this.type}
                    />
                  </View>
                  <View style={styles.tagContainer}>
                    <Text style={styles.product}>Brand:</Text>
                    <TextInput
                      style={styles.tagItem}
                      maxLength={20}
                      placeholderTextColor="gray"
                      placeholder={tags.brand}
                      autoCapitalize="none"
                      onPress={this.editTag}
                      value={this.brand}
                    />
                  </View>
                </View>
              );
            })}
          </Card>
          <TouchableOpacity
            style={styles.confirmContainer}
            onPress={() => navigation.navigate('PriceView')}
          >
            <Text style={styles.confirmText}>Confirm tags</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.imageContainer}
          source={bottomImage}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

export default RenderProductScreen;

RenderProductScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
