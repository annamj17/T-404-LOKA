import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import logoImage from '../../../assets/K3imaginelogo.png';
import hamburgerLogo from '../../../assets/Hamburger_icon.svg.png';
import styles from './styles';

const HeaderImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={logoImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.hamburgerLogo}
            source={hamburgerLogo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderImage;
