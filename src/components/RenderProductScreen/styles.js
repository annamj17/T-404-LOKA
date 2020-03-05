import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  image: {
    marginTop: 30,
    height: '45%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10
  },
  imageContainer: {
    marginTop: 'auto',
    height: '12%'
  },
  tagContainer: {
    width: 100,
    height: 40,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
    marginTop: 5,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  product: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 18
  },
  tagItem: {
    width: 100,
    height: 30,
    marginLeft: 70,
    marginTop: 'auto',
    marginBottom: 10,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  confirmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#318F95',
    borderRadius: 10,
    marginTop: 30,
    height: 60,
    width: 200
  },
  confirmText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20
  }
});
