import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import bottomImage from '../../../assets/Capture.png';
import styles from './styles';

const data = [
  {
    id: 1,
    fullConditionPrice: '  50£',
    resalePrice: '  25£'
  }
];

class RenderProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // imageUri: ''
    };
  }

  render() {
    // const { imageUri } = this.state;
    return (
      <View style={styles.screens}>
        <Card containerStyle={{ padding: 50 }}>
          {data.map(tags => {
            return (
              <View key={tags.id}>
                <Text style={styles.tagItem}>
                  Full Condition Price:
                  {tags.fullConditionPrice}
                </Text>
                <Text style={styles.tagItem}>
                  Resale Price:
                  {tags.resalePrice}
                </Text>
              </View>
            );
          })}
        </Card>
        <TouchableOpacity
          style={styles.registerContainer}
          // onPress={() => navigation.navigate('PriceView')}
        >
          <Text style={styles.registerText}>Register item</Text>
        </TouchableOpacity>
        {/* {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View>
            <Text>Sorry no image found</Text>
          </View>
        )} */}
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
