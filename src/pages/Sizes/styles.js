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
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: '10%',
  },

  item: {
    backgroundColor: colors.white,
    width: 150,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
    display: 'flex',
    marginVertical: 5,
  },

  img: {
    height: 130,
    width: 130,
    borderRadius: 5,
  },

  size: {
    textAlign: 'center',
    color: '#0b2031',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 18,
    marginBottom: 5,
  },

  price: {
    textAlign: 'center',
    color: '#706e7b',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 18,
  },
});

export default styles;
