/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Image } from 'react-native';

import logoImage from '../../../assets/K3imaginelogo.png';

class HeaderImage extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={logoImage}
          style={{
            width: 130,
            height: 130,
            borderRadius: 40 / 2,
            marginLeft: 25
          }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default HeaderImage;
