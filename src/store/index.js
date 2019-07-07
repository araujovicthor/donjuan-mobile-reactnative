import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import sagas from './sagas';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composer);

sagaMiddleware.run(sagas);

export default store;
