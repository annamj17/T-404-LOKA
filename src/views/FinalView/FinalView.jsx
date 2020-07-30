import React from 'react';
import { StyleSheet, View } from 'react-native';

import RenderFinalScreen from '../../components/RenderFinalScreen/renderFinalScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class FinalView extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <View style={styles.screens}>
        <RenderFinalScreen navigation={navigation} productData={params} />
      </View>
    );
  }
}

export default FinalView;
