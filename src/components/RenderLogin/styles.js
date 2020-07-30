import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flex: 1,
    flexDirection: 'column',
    height: '100%'
  },
  logoImage: {
    width: 370,
    height: 280,
    marginTop: 'auto',
    alignSelf: 'center'
  },
  loginHeader: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center'
  },
  inputView: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: 'black'
  },
  btn: {
    flexDirection: 'row',
    width: 90,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 40,
    backgroundColor: '#D3D3D3'
  },
  imageContainer: {
    marginTop: 'auto',
    height: '12%'
  },
  errorText: {
    color: 'red',
    textAlign: 'center'
  }
});
