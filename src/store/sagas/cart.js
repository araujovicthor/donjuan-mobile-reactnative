import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '../../services/api';
import cep from '../../services/cep';
import NavigationService from '~/services/navigation';

import CartActions from '../ducks/cart';

export function* putCart({ id }) {
  const item = yield call(api.get, `/prices/${id}`);
  yield put(CartActions.putCartSuccess(item));
  NavigationService.navigate('Cart');
}

export function* removeItem({ id }) {
  yield put(CartActions.removeItemSuccess(id));
  NavigationService.navigate('Cart');
}

export function* changeInfo({ key }) {
  if (Object.keys(key)[0] === 'zipcode') {
    const clearCode = key.zipcode.replace(/\D/g, '');
    const newkey = {};
    try {
      const { data } = yield call(cep.get, `/${clearCode}/json/`);
      newkey.zipcode = data.cep;
      newkey.address = data.logradouro;
      newkey.neighborhood = data.bairro;
      yield put(CartActions.changeInfoSuccess(newkey));
    } catch (error) {
      yield put(CartActions.changeInfoFailure());
      yield put(ToastActionsCreators.displayError('CEP não encontrado'));
    }
  } else {
    yield put(CartActions.changeInfoSuccess(key));
  }
}

export function* newOrder({ item }) {
  const newItem = {};
  const { zipcode, number } = item;
  if (zipcode !== null && zipcode !== '') {
    if (number !== null && number !== '') {
      newItem.totalPrice = item.totalPrice;
      newItem.data = item.data;
      newItem.note = item.note;
      newItem.address = item.address;
      newItem.neighborhood = item.neighborhood;
      newItem.zipcode = parseInt(item.zipcode.replace(/[^\d]+/g, ''), 10);
      newItem.number = parseInt(number, 10);
      yield call(api.post, '/orders', newItem);
      yield put(CartActions.newOrderSuccess());
      NavigationService.navigate('Main');
    } else {
      yield put(ToastActionsCreators.displayError('Complete o número'));
    }
  } else {
    yield put(ToastActionsCreators.displayError('Corrija o CEP antes de finalizar'));
  }
}
