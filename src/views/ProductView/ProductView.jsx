/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RenderProductScreen from '../../components/RenderProductScreen/renderProductScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class ProductView extends React.Component {
  static navigationOptions = {};

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    console.log('HER!!!!!!', params);
    return (
      <View style={styles.screens}>
        <RenderProductScreen navigation={navigation} photoData={params} />
      </View>
    );
  }
}

export default connect()(ProductView);

ProductView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
