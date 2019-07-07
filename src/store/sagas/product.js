import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '../../services/api';

import ProductActions from '../ducks/product';

export function* getProducts() {
  try {
    const { data } = yield call(api.get, '/products');
    yield put(ProductActions.getProductsSuccess(data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.response.data.error));
  }
}
