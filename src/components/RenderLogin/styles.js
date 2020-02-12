import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    marginTop: 100,
    width: 350,
    height: 200
  },
  loginHeader: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center'
  },
  inputView: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    marginBottom: 20,
    marginTop: 30,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: 'black'
  },
  forgotPassword: {
    fontSize: 11
  },
  btn: {
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 40,
    backgroundColor: '#D3D3D3'
  },
  bottomImage: {
    marginTop: 100,
    width: 380,
    height: 100
  }
});
