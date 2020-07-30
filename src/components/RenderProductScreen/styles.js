import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screens: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  image: {
    marginTop: 30,
    height: '35%',
    width: '70%',
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
    fontWeight: 'bold'
  },
  product: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  tagItem: {
    marginLeft: 20,
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: 100,
    alignSelf: 'center'
  },
  scoreItem: {
    marginLeft: 10,
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    alignSelf: 'center'
  },
  priceItem: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  priceTag: {
    marginTop: 15,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  confirmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#318F95',
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    width: 190
  },
  confirmText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 10
  }
});
