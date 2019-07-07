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

  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  content: {
    width: '90%',
    alignSelf: 'center',
  },

  input: {
    backgroundColor: colors.white,
    flexWrap: 'wrap',
    textAlignVertical: 'top',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: colors.light,
  },

  bottom: {
    alignSelf: 'flex-end',
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
