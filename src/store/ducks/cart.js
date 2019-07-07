import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  putCartRequest: ['id'],
  putCartSuccess: ['id'],
  removeItemRequest: ['id'],
  removeItemSuccess: ['id'],
  changeInfoRequest: ['key'],
  changeInfoSuccess: ['key'],
  changeInfoFailure: null,
  newOrderRequest: ['item'],
  newOrderSuccess: null,
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  totalPrice: '0',
  data: [],
  note: '',
  zipcode: '',
  address: '',
  number: '',
  neighborhood: '',
});

/* Reducers */

export const push = (state, { id }) => state.merge({
  totalPrice: (parseFloat(state.totalPrice) + parseFloat(id.data.price)).toFixed(2),
  data: [...state.data, id.data],
});

export const remove = (state, { id }) => {
  const array = [...state.data];
  const index = array.indexOf(id);
  if (index !== -1) {
    array.splice(index, 1);
    return state.merge({
      totalPrice: (parseFloat(state.totalPrice) - parseFloat(id.price)).toFixed(2),
      data: array,
    });
  }
  return state;
};

export const change = (state, { key }) => state.merge(key);

export const failure = state => state.merge({
  zipcode: '',
  address: '',
  number: '',
  neighborhood: '',
});

export const newOrder = state => state.merge({
  totalPrice: '0',
  data: [],
  note: '',
  zipcode: '',
  address: '',
  number: '',
  neighborhood: '',
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PUT_CART_SUCCESS]: push,
  [Types.REMOVE_ITEM_SUCCESS]: remove,
  [Types.CHANGE_INFO_SUCCESS]: change,
  [Types.CHANGE_INFO_FAILURE]: failure,
  [Types.NEW_ORDER_SUCCESS]: newOrder,
});
