import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%'
  },
  navbar: {
    flexDirection: 'row',
    maxWidth: '1024px',
    minWidth: '320px',
    height: 64,
    justifyContent: 'space-between'
  },
  logo: {
    width: '150px',
    height: '64px'
  },
  hamburgerLogo: {
    width: '30px',
    height: '64px'
    // float: 'right'
    // position: 'absolute'
  }
});
