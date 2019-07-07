import colors from './colors';

export const formStyles = {
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.light,
    marginBottom: 5,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: colors.light,
  },
};

export const buttonStyles = {
  button: {
    marginBottom: 5,
    marginTop: 5,
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
};
