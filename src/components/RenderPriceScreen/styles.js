import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 100,
    alignItems: 'center'
  },
  imageContainer: {
    marginTop: 'auto',
    height: '12%'
  },
  priceContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  priceText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 18
  },
  priceItem: {
    width: 35,
    marginLeft: 25,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  priceSign: {
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20
  },
  registerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#318F95',
    borderRadius: 10,
    marginTop: 30,
    height: 60,
    width: 200
  },
  registerText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20
  }
});
