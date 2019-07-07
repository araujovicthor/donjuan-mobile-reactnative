import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import { reducer as auth } from './auth';
import { reducer as product } from './product';
import { reducer as order } from './order';
import { reducer as type } from './type';
import { reducer as size } from './size';
import { reducer as cart } from './cart';

export default combineReducers({
  auth,
  product,
  order,
  type,
  size,
  cart,
  toast,
});
