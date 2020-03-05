import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 100
  },
  imageContainer: {
    marginTop: 'auto',
    height: '12%'
  },
  priceContainer: {
    width: 300,
    height: 30,
    paddingTop: 2,
    marginTop: 5,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  priceText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20
  },
  priceItem: {
    width: 50,
    height: 30,
    marginLeft: 'auto',
    marginTop: 'auto',
    fontSize: 20,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  priceSign: {
    height: 27,
    marginLeft: 'auto',
    marginTop: 'auto',
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
