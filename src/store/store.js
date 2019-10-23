import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export default () => {
  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const initialState = {};

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  );

  sagaMiddleware.run(rootSaga);

  return {
    store
  };
};
