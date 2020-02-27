import React from 'react';
import { View, Text, Image } from 'react-native';

import bottomImage from '../../../assets/Capture.png';
import styles from './styles';

class RenderProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: ''
    };
  }

  render() {
    const { imageUri } = this.state;
    return (
      <View style={styles.screens}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View>
            <Text>Sorry no image found</Text>
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

export default RenderProductScreen;
