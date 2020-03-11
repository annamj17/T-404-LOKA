import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';

import bottomImage from '../../../assets/Capture.png';
import styles from './styles';

class RenderPriceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [
        {
          id: 1,
          fullConditionPrice: '60',
          resalePrice: '25'
        }
      ]
    };
  }

  editPrice(newPrice) {
    this.setState({
      prices: newPrice
    });
  }

  render() {
    const { navigation } = this.props;
    const { prices } = this.state;
    return (
      <View style={styles.screens}>
        <Card containerStyle={{ padding: 30 }}>
          {prices.map(tags => {
            return (
              <View key={tags.id}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>Full Condition Price:</Text>
                  <TextInput
                    style={styles.priceItem}
                    maxLength={20}
                    placeholderTextColor="gray"
                    placeholder={tags.fullConditionPrice}
                    autoCapitalize="none"
                    onPress={this.editPrice}
                    value={this.fullConditionPrice}
                  />
                  <Text style={styles.priceSign}>£</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>Resale Price:</Text>
                  <TextInput
                    style={styles.priceItem}
                    maxLength={20}
                    placeholderTextColor="gray"
                    placeholder={tags.resalePrice}
                    autoCapitalize="none"
                    onPress={this.editPrice}
                    value={this.resalePrice}
                  />
                  <Text style={styles.priceSign}>£</Text>
                </View>
              </View>
            );
          })}
        </Card>
        <TouchableOpacity
          style={styles.registerContainer}
          onPress={() => navigation.navigate('FinalView')}
        >
          <Text style={styles.registerText}>Register item</Text>
        </TouchableOpacity>
        <Image
          style={styles.imageContainer}
          source={bottomImage}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

export default RenderPriceScreen;

RenderPriceScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
