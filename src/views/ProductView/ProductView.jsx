import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import RenderProductScreen from '../../components/RenderProductScreen/renderProductScreen';
import HeaderImage from '../../components/HeaderLogo/headerLogo';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class ProductView extends React.Component {
  static navigationOptions = {
    headerLeft: () => <HeaderImage />,
    headerTitle: () => null
  };

  render() {
    return (
      <View style={styles.screens}>
        <RenderProductScreen />
      </View>
    );
  }
}

export default connect()(ProductView);
