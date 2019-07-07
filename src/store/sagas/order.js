import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import moment from 'moment';
import 'moment/locale/pt-br';
import api from '../../services/api';
import NavigationService from '~/services/navigation';

import OrderActions from '../ducks/order';

export function* getOrders() {
  try {
    const { data: orders } = yield call(api.get, '/orders');

    orders.map(
      order => (order.lastChange = moment(order.updatedAt)
        .locale('pt-br')
        .fromNow()),
    );

    yield put(OrderActions.getOrdersSuccess(orders));

    NavigationService.navigate('Orders');
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.response.data.error));
  }
}
