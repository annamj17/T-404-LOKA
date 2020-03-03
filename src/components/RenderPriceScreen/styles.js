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
  tagItem: {
    alignSelf: 'center',
    paddingTop: 20,
    width: 250,
    height: 50,
    marginBottom: 10,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
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
