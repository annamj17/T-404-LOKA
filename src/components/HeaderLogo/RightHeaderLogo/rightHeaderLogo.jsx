import React from 'react';
import { View } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { FontAwesome } from '@expo/vector-icons';

import styles from '../styles';
import { logout } from '../../../services/authentication.service';

class HeaderImage extends React.PureComponent {
  menu = null;

  setMenuRef = ref => {
    this.menu = ref;
  };

  hideMenu = () => {
    this.menu.hide();
  };

  showMenu = () => {
    this.menu.show();
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Menu
          ref={this.setMenuRef}
          button={<FontAwesome onPress={this.showMenu} style={styles.icon} name="bars" />}
        >
          <MenuItem
            onPress={() => {
              this.hideMenu();
              logout();
              navigation.navigate('Auth');
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </View>
    );
  }
}

export default HeaderImage;
