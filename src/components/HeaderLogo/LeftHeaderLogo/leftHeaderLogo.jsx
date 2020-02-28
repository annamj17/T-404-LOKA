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
          source={logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderImage;
