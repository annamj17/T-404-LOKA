import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flex: 1,
    flexDirection: 'column',
    height: '100%'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: 270,
    height: 100
  },
  icon: {
    fontSize: 90
  },
  textCss: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 200,
    color: '#318F95',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 'auto',
    height: '15%'
  }
});
