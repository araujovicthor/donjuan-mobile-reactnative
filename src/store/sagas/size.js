import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '../../services/api';
import NavigationService from '~/services/navigation';

import SizeActions from '../ducks/size';

export function* getSizes({ type_id }) {
  try {
    const { data } = yield call(api.get, `/prices?type_id=${type_id}`);

    yield put(SizeActions.getSizesSuccess(data));

    NavigationService.navigate('Sizes');
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.response.data.error));
  }
}
