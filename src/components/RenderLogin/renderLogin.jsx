import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import logoImage from '../../../assets/K3imaginelogo.png';
import bottomImage from '../../../assets/Capture.png';

const RenderLogin = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={logoImage}
        resizeMode="contain"
      />
      <Text style={styles.loginHeader}>
        Welcome, please log in to your account
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username *"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password *"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text> Login </Text>
      </TouchableOpacity>
      <Image
        style={styles.bottomImage}
        source={bottomImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default RenderLogin;
