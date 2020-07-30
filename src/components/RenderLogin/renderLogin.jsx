import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native';

import { logIn } from '../../services/authentication.service';
import styles from './styles';
import logoImage from '../../../assets/K3imaginelogo.png';
import bottomImage from '../../../assets/Capture.png';

const RenderLogin = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View style={styles.screens}>
      <KeyboardAvoidingView behavior="padding">
        <Image style={styles.logoImage} source={logoImage} resizeMode="contain" />
        <Text style={styles.loginHeader}>Welcome, please log in to your account</Text>
        <View style={styles.inputView}>
          <TextInput
            value={userName}
            name="userName"
            type="text"
            onChangeText={text => setUserName(text)}
            style={styles.inputText}
            placeholder="Username *"
            textContentType="username"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={password}
            name="password"
            type="password"
            onChangeText={text => setPassword(text)}
            style={styles.inputText}
            placeholder="Password *"
            textContentType="password"
            secureTextEntry
          />
        </View>
        {error && <Text style={styles.errorText}>There was an error, please try again</Text>}
        <TouchableOpacity
          style={styles.btn}
          name="login"
          onPress={async () => {
            setIsLoading(true);
            const loggedIn = await logIn(userName, password);
            setIsLoading(false);
            if (loggedIn) {
              setError(false);
              navigation.navigate('App');
            } else {
              setError(true);
            }
          }}
        >
          <Text> Login </Text>
          <ActivityIndicator animating={isLoading} size="small" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Image style={styles.imageContainer} source={bottomImage} resizeMode="stretch" />
    </View>
  );
};

export default RenderLogin;
