import { StyleSheet } from 'react-native';
import { colors, general } from '~/styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  imageBackground: {
    height: '100%',
    width: '100%',
  },

  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    color: colors.white,
    textAlign: 'center',
  },

  div: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },

  image: {
    width: 72,
    height: 72,
  },
});

export default styles;
