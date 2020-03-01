/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import logoImage from '../../../../assets/K3imaginelogo.png';
import styles from '../styles';

const HeaderImage = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          onPress={() => this.props.navigation.navigate('HomeView')}
          source={logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderImage;
