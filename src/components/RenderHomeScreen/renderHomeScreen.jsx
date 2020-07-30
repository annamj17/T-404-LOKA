import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import styles from './styles';
import bottomImage from '../../../assets/Capture.png';

class RenderHomeScreen extends React.Component {
  // Calls takePhoto from imageService
  async takePhoto() {
    const { navigation } = this.props;
    const photo = await takePhoto();
    if (photo !== null) {
      const thePhoto = photo.photoToDisplay;
      const theTags = photo.tags;
      navigation.navigate('ProductView', { thePhoto, theTags });
    } else {
      navigation.navigate('HomeView');
    }
  }

  // Calls selectFromCameraRoll from imageService
  async selectFromCameraRoll() {
    const { navigation } = this.props;
    const photo = await selectFromCameraRoll();
    if (photo !== null) {
      const thePhoto = photo.photoToDisplay;
      const theTags = photo.tags;
      navigation.navigate('ProductView', { thePhoto, theTags });
    } else {
      navigation.navigate('HomeView');
    }
  }

  render() {
    return (
      <View style={styles.screens}>
        <View>
          <Text style={styles.textCss}>Add New Item</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity name="camera" onPress={() => this.takePhoto()}>
              <Entypo style={styles.icon} name="camera" />
            </TouchableOpacity>
            <TouchableOpacity name="cameraRoll" onPress={() => this.selectFromCameraRoll()}>
              <Entypo style={styles.icon} name="image" />
            </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.imageContainer} source={bottomImage} resizeMode="stretch" />
      </View>
    );
  }
}

export default RenderHomeScreen;
