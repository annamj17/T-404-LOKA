import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginView from '../views/LoginView/LoginView';
import HomeView from '../views/HomeView/HomeView';
import ProductView from '../views/ProductView/ProductView';
import FinalView from '../views/FinalView/FinalView';
import RightHeaderLogo from '../components/HeaderLogo/RightHeaderLogo/rightHeaderLogo';
import LeftHeaderLogo from '../components/HeaderLogo/LeftHeaderLogo/leftHeaderLogo';

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: LoginView }
  },
  {
    initialRouteName: 'Login'
  }
);

const AppNavigator = createStackNavigator(
  {
    HomeView: {
      screen: HomeView
    },
    ProductView: {
      screen: ProductView
    },
    FinalView: {
      screen: FinalView,
      initialRouteName: 'FinalView',
      headerBackTitle: 'null'
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        height: 90
      },
      headerRight: () => <RightHeaderLogo navigation={navigation} />,
      headerTitle: () => <LeftHeaderLogo navigation={navigation} />,
      headerBackTitle: ' ',
      headerTintColor: 'black'
    }),
    initialRouteName: 'HomeView'
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
);

export default createAppContainer(SwitchNavigator);
