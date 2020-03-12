/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';
import bottomImage from '../../../assets/Capture.png';

const data = [
  {
    id: 1,
    color: ' Black',
    type: '  Sweatshirt',
    brand: ' Nike',
    fullConditionPrice: '  50',
    resalePrice: '  25'
  }
];

class RenderFinalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screens}>
        <Card title="Registered Product" containerStyle={{ padding: 30 }}>
          {data.map(tags => {
            return (
              <View key={tags.id}>
                <View style={styles.productContainer}>
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
                  <Text style={styles.tagItem}>
                    Full Condition Price:
                    {tags.fullConditionPrice}
                    <Text>£</Text>
                  </Text>
                  <Text style={styles.tagItem}>
                    Resale Price:
                    {tags.resalePrice}
                    <Text>£</Text>
                  </Text>
                </View>
              </View>
            );
          })}
        </Card>
        <Card title="Thank you">
          <Text style={styles.thankMessage}>
            Your product has been registered
          </Text>
          <Button
            onPress={() => navigation.navigate('HomeView')}
            title="Go back to home page"
          />
        </Card>
        <Image
          style={styles.imageContainer}
          source={bottomImage}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

export default RenderFinalScreen;

RenderFinalScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
