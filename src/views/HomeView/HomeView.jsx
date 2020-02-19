import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import RenderHomeScreen from '../../components/RenderHomeScreen/renderHomeScreen';

const styles = StyleSheet.create({
    screens: {
      flex: 1
    }
  });

  class HomeView extends React.Component {
      render() {
        return (
            <View style={styles.screens}>
              <RenderHomeScreen />
            </View>
          );
      }
  }

  export default connect()(HomeView);
  