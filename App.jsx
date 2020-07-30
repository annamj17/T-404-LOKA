import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import AppContainer from './src/routes';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

export default function App() {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <View style={styles.screens}>
      <AppContainer />
    </View>
  );
}
