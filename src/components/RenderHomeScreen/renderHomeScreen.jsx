import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { Entypo } from '@expo/vector-icons';
import { takePhoto } from '../../services/imageService';
import styles from './styles';

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

  // async selectFromCameraRoll() {
  //   const photo = await selectFromCameraRoll();
  //   this.setState({ imageUri: photo });
  // }

  render() {
    const { imageUri } = this.state;
    return (
      <View style={styles.screens}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View>
            <TouchableOpacity onPress={() => this.takePhoto()}>
              <Text style={styles.btn}>Add Item</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
              <Entypo style={styles.icon} name="image" />
            </TouchableOpacity> */}
          </View>
        )}
      </View>
    );
  }
}

export default RenderHomeScreen;
