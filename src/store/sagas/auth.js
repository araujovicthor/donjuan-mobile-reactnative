import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '../../services/api';
import NavigationService from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@DonJuan:token');

  if (token) {
    try {
      const userName = yield call([AsyncStorage, 'getItem'], '@DonJuan:userName');
      yield call(api.get, '/products');
      yield put(AuthActions.signInSuccess(token, userName));
    } catch (error) {
      yield call([AsyncStorage, 'clear']);
      yield put(AuthActions.initCheckSuccess());
      NavigationService.navigate('SignIn');
    }
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, '/sessions', { email, password });

    yield call([AsyncStorage, 'setItem'], '@DonJuan:token', response.data.token);
    yield call([AsyncStorage, 'setItem'], '@DonJuan:userName', response.data.userName);

    yield put(AuthActions.signInSuccess(response.data.token, response.data.userName));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.response.data.error));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
  NavigationService.navigate('SignIn');
}

export function* signUp({ userName, email, password }) {
  try {
    const response = yield call(api.post, '/signin', { name: userName, email, password });

    yield put(ToastActionsCreators.displayInfo('Usuário criado com sucesso'));
    yield put(AuthActions.signInRequest(response.data.email, password));
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.response.data.error));
  }
}
