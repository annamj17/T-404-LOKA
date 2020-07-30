import React from 'react';
import { StyleSheet, View } from 'react-native';

import RenderProductScreen from '../../components/RenderProductScreen/renderProductScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

const ProductView = ({ navigation }) => {
  const { params } = navigation.state;
  const data = params.theTags;
  const photo = params.thePhoto;
  return (
    <View style={styles.screens}>
      <RenderProductScreen navigation={navigation} photoData={photo} productData={data} />
    </View>
  );
};

export default ProductView;
