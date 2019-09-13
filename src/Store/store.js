import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import AuthReducer from './reducer/auth';
import { watchAuth } from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
const store = createStore(AuthReducer, composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleware)));
sagaMiddleware.run(watchAuth);

export default store