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
    width: 270,
    height: '100%'
  },
  icon: {
    fontSize: 90
  },
  image: {
    height: '50%',
    width: '70%',
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
    height: '15%'
  },
  container: {
    flex: 1,
    paddingTop: 70
  },
  item: {
    padding: 8,
    fontSize: 18,
    height: 80,
    color: 'grey',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginVertical: 3,
    marginHorizontal: 40
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: '#318F95',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    height: 30,
    width: 100
  }
});
