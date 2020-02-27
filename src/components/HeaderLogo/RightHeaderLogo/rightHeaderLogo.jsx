import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import hamburgerLogo from '../../../../assets/Hamburger_icon.svg.png';
import styles from '../styles';

const HeaderImage = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.hamburgerLogo}
          source={hamburgerLogo}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderImage;
