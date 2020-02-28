import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import LoginView from '../views/LoginView/LoginView';
import HomeView from '../views/HomeView/HomeView';
import PriceView from '../views/PriceView/PriceView';
import RightHeaderLogo from '../components/HeaderLogo/RightHeaderLogo/rightHeaderLogo';
import LeftHeaderLogo from '../components/HeaderLogo/LeftHeaderLogo/leftHeaderLogo';

const StackNavigator = createStackNavigator(
  {
    HomeView: {
      screen: HomeView
    },
    PriceView: {
      screen: PriceView
    }

    // LoginView
    // HomeView,
    // ProductView
    // Login: { screen: LoginView, navigationOptions: { headerShown: false } }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 80
        // elevation: 0, // Remove shadow from android
        // shadowOpacity: 0, // Remove shadow from ios
        // borderBottomWidth: 0
      },
      headerRight: () => <RightHeaderLogo />,
      headerTitle: () => <LeftHeaderLogo />,
      headerBackTitle: 'back',
      headerTintColor: 'black'
    }
  }
);

export default createAppContainer(StackNavigator);
