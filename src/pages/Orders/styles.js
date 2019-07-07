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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    paddingLeft: 20,
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
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

  text: {
    fontWeight: 'normal',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    display: 'flex',
    width: 0,
    flexGrow: 1,
  },

  id: {
    color: '#0b2031',
    fontSize: 12,
    marginBottom: 5,
  },

  time: {
    color: '#706e7b',
    fontSize: 11,
    marginBottom: 5,
  },

  price: {
    color: '#0b2031',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
