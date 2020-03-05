/* eslint-disable react/no-unused-state */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

import styles from './styles';
import bottomImage from '../../../assets/Capture.png';

class RenderHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: ''
    };
  }

  // Calls takePhoto from imageService
  async takePhoto() {
    const { navigation } = this.props;
    const photo = await takePhoto();
    this.setState({ imageUri: photo });
    navigation.navigate('ProductView', { photo });
  }

  // Calls selectFromCameraRoll from imageService
  async selectFromCameraRoll() {
    const { navigation } = this.props;
    const photo = await selectFromCameraRoll();
    this.setState({ imageUri: photo });
    navigation.navigate('ProductView', { photo });
  }

  render() {
    // const { imageUri } = this.state;
    // const { navigation } = this.props;
    return (
      <View style={styles.screens}>
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
        <Image
          style={styles.imageContainer}
          source={bottomImage}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

// <TouchableOpacity
//   style={styles.confirmContainer}
//   onPress={() => navigation.navigate('PriceView')}
// >
//   <Text style={styles.confirmText}>Confirm tags</Text>
// </TouchableOpacity>;

export default RenderHomeScreen;

RenderHomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
