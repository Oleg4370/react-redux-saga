import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { initSagas } from '../initSagas';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = process.env.NODE_ENV === 'production' ? [sagaMiddleware] : [logger, sagaMiddleware];

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  const store = createStoreWithMiddleware(reducer);

  initSagas(sagaMiddleware);
  return store;
}
