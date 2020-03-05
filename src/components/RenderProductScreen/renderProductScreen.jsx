/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';

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

class RenderProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const image = navigation.state;

    return (
      <View style={styles.screens}>
        <View>
          <Image source={{ uri: image.params.photo }} style={styles.image} />
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
