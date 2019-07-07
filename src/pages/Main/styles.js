import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderColor: colors.darkTransparent,
  },

  imageBackground: {
    width: '100%',
    resizeMode: 'contain',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 30,
    paddingBottom: 95,
    marginBottom: -65,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 15,
    backgroundColor: colors.primary,
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  item: {
    backgroundColor: colors.white,
    height: 100,
    width: '90%',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    display: 'flex',
    marginHorizontal: 10,
    marginVertical: 5,
  },

  img: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },

  text: {
    fontWeight: 'normal',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    display: 'flex',
    width: 0,
    flexGrow: 1,
  },

  product: {
    color: '#0b2031',
    fontSize: 12,
    marginBottom: 5,
  },

  timebox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  description: {
    flexWrap: 'wrap',
    color: '#706e7b',
    fontSize: 11,
    marginBottom: 5,
  },

  timer: {
    paddingLeft: 5,
    color: '#706e7b',
    fontSize: 10,
  },
});

export default styles;
