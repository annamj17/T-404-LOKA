import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import styles from './styles';

class RenderHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      imageUri: ''
    };
  }

  async takePhoto() {
    const photo = await takePhoto();
    // eslint-disable-next-line react/no-unused-state
    this.setState({ imageUri: photo });
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    // eslint-disable-next-line react/no-unused-state
    this.setState({ imageUri: photo });
  }

  render() {
    // const { imageUri } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={() => this.takePhoto()}>
          <Entypo style={styles.icon} name="camera" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
          <Entypo style={styles.icon} name="image" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default RenderHomeScreen;
