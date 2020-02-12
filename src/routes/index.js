import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginView from '../views/LoginView/LoginView';

const StackNavigator = createStackNavigator(
  {
    LoginView
    // Login: { screen: LoginView, navigationOptions: { headerShown: false } }
  }
  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       height: 80,
  //       backgroundColor: '#087E8B',
  //       elevation: 0, // Remove shadow from android
  //       shadowOpacity: 0, // Remove shadow from ios
  //       borderBottomWidth: 0
  //     },
  //     headerBackTitle: 'back',
  //     headerTintColor: '#F9F9F9'
  //   }
  // }
);

export default createAppContainer(StackNavigator);
