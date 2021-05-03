import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createGlobalReducer from './global-reducers';
import globalSagas from './global-sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(createGlobalReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(globalSagas);

export default store;
