import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RenderLogin from '../../components/RenderLogin/renderLogin';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class LoginView extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screens}>
        <RenderLogin navigation={navigation} />
      </View>
    );
  }
}

export default connect()(LoginView);

LoginView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
