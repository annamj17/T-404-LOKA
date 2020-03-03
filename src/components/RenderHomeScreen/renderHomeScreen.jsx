import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

import styles from './styles';
import bottomImage from '../../../assets/Capture.png';

const data = [
  {
    id: 1,
    color: '  Black',
    type: '  Hoodie',
    brand: '  Nike'
  }
];

class RenderHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: ''
    };
  }

  // Calls takePhoto from imageService
  async takePhoto() {
    const photo = await takePhoto();
    this.setState({ imageUri: photo });
  }

  // Calls selectFromCameraRoll from imageService
  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    this.setState({ imageUri: photo });
  }

  render() {
    const { imageUri } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.screens}>
        {imageUri ? (
          <View>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Card containerStyle={{ padding: 0 }}>
              {data.map(tags => {
                return (
                  <View key={tags.id}>
                    <Text style={styles.tagItem}>
                      Color:
                      {tags.color}
                    </Text>
                    <Text style={styles.tagItem}>
                      Type:
                      {tags.type}
                    </Text>
                    <Text style={styles.tagItem}>
                      Brand:
                      {tags.brand}
                    </Text>
                  </View>
                );
              })}
            </Card>
            {/* <View>
              <FlatList
                data={[{ key: 'Color' }, { key: 'Type' }, { key: 'Brand' }]}
                renderItem={({ item }) => (
                  <Text style={styles.tagItem}>{item.key}</Text>
                )}
              />
            </View> */}
            <TouchableOpacity
              style={styles.confirmContainer}
              onPress={() => navigation.navigate('PriceView')}
            >
              <Text style={styles.confirmText}>Confirm tags</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.textCss}>Add New Item</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => this.takePhoto()}>
                <Entypo style={styles.icon} name="camera" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
                <Entypo style={styles.icon} name="image" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <Image
          style={styles.imageContainer}
          source={bottomImage}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

export default RenderHomeScreen;

RenderHomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
