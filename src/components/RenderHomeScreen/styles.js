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
    // paddingTop: 30,
    width: 270,
    height: '100%'
  },
  icon: {
    fontSize: 90
  },
  image: {
    marginTop: 30,
    height: '45%',
    width: '90%',
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
