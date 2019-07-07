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
    alignItems: 'center',
  },

  blockheader: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'left',
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

  size: {
    color: '#706e7b',
    fontSize: 11,
    marginBottom: 5,
  },

  price: {
    color: '#0b2031',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },

  backgroundIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  bottom: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    paddingHorizontal: 30,
    marginBottom: 5,
    marginTop: 5,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 14,
    paddingRight: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
