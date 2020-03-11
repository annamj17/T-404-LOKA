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
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10
  },
  imageContainer: {
    marginTop: 'auto',
    height: '12%'
  },
  tagContainer: {
    flexDirection: 'row',
    height: 35,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  product: {
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 18
  },
  tagItem: {
    marginLeft: 40,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignSelf: 'center'
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
