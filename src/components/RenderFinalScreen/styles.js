import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
    // alignItems: 'center'
  },
  imageContainer: {
    marginTop: 'auto',
    height: '12%'
  },
  productContainer: {
    // flexDirection: 'column',
    // alignSelf: 'center',
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  tagItem: {
    paddingTop: 10,
    width: '100%',
    height: 40,
    // marginBottom: 10,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  thankMessage: {
    alignSelf: 'center',
    paddingTop: 10,
    width: '100%',
    height: 40,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }
});
