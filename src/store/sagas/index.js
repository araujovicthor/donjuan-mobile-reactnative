import { all, takeLatest } from 'redux-saga/effects';

import {
  signIn, signOut, init, signUp,
} from './auth';
import { AuthTypes } from '../ducks/auth';

import { getProducts } from './product';
import { ProductTypes } from '../ducks/product';

import { getOrders } from './order';
import { OrderTypes } from '../ducks/order';

import { getTypes } from './type';
import { TypeTypes } from '../ducks/type';

import { getSizes } from './size';
import { SizeTypes } from '../ducks/size';

import {
  putCart, removeItem, changeInfo, newOrder,
} from './cart';
import { CartTypes } from '../ducks/cart';

export default function* rootSaga() {
  yield all([
    init(),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProducts),

    takeLatest(OrderTypes.GET_ORDERS_REQUEST, getOrders),

    takeLatest(TypeTypes.GET_TYPES_REQUEST, getTypes),

    takeLatest(SizeTypes.GET_SIZES_REQUEST, getSizes),

    takeLatest(CartTypes.PUT_CART_REQUEST, putCart),
    takeLatest(CartTypes.REMOVE_ITEM_REQUEST, removeItem),
    takeLatest(CartTypes.CHANGE_INFO_REQUEST, changeInfo),
    takeLatest(CartTypes.NEW_ORDER_REQUEST, newOrder),
  ]);
}
