import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {
  takePhoto,
  selectFromCameraRoll
} from '../../services/imageService';
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
    return (
      <View style={styles.screens}>
        {imageUri ? (
          <View>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <View>
              <FlatList
                data={[
                  { key: 'Color' },
                  { key: 'Type' },
                  { key: 'Brand' }
                ]}
                renderItem={({ item }) => (
                  <Text style={styles.item}>{item.key}</Text>
                )}
              />
              {/* <Text style={styles.title}>Confirm tags</Text> */}
            </View>
            <TouchableOpacity style={styles.title}>
              <Text>Confirm tags</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.textCss}>Add New Item</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => this.takePhoto()}>
                <Entypo style={styles.icon} name="camera" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectFromCameraRoll()}
              >
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
