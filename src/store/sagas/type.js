import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '../../services/api';
import NavigationService from '~/services/navigation';

import TypeActions from '../ducks/type';

export function* getTypes({ product_id }) {
  try {
    const { data } = yield call(api.get, `/types?product_id=${product_id}`);

    yield put(TypeActions.getTypesSuccess(data));

    NavigationService.navigate('Types');
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.response.data.error));
  }
}
