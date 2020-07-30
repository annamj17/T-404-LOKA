import React from 'react';
import { StyleSheet, View } from 'react-native';

import RenderHomeScreen from '../../components/RenderHomeScreen/renderHomeScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

const HomeView = ({ navigation }) => {
  return (
    <View style={styles.screens}>
      <RenderHomeScreen navigation={navigation} />
    </View>
  );
};

export default HomeView;
