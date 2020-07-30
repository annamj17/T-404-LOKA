import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import logoImage from '../../../../assets/K3imaginelogo.png';
import styles from '../styles';

const HeaderImage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeView');
        }}
      >
        <Image style={styles.logo} source={logoImage} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderImage;
