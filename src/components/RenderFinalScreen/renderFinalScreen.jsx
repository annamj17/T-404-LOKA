import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';

import styles from './styles';
import bottomImage from '../../../assets/Capture.png';

const RenderFinalScreen = ({ navigation, productData }) => {
  const data = productData.tags;

  return (
    <View style={styles.screens}>
      <Card
        title="Registered Product"
        containerStyle={{
          padding: 30,
          marginTop: 100
        }}
      >
        <View style={styles.productContainer}>
          <Text style={styles.tagItem}>
            Color:
            {data.color}
          </Text>
          <Text style={styles.tagItem}>
            Type:
            {data.type}
          </Text>
          <Text style={styles.tagItem}>
            Brand:
            {data.brand}
          </Text>
          <Text style={styles.tagItem}>
            Full Condition Price:
            {`${data.productPrice.fullConditionPrice}£`}
          </Text>
          <Text style={styles.tagItem}>
            Resale Price:
            {`${data.productPrice.resalePrice}£`}
          </Text>
        </View>
      </Card>
      <Card title="Thank you">
        <Text style={styles.thankMessage}>Your product has been registered</Text>
        <Button onPress={() => navigation.navigate('HomeView')} title="Go back to home page" />
      </Card>
      <Image style={styles.imageContainer} source={bottomImage} resizeMode="stretch" />
    </View>
  );
};

export default RenderFinalScreen;
