import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: 270,
    height: '100%'
  },
  icon: {
    fontSize: 90
  },
  image: {
    height: '40%',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 10
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
