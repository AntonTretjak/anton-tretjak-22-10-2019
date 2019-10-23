import {all, fork} from 'redux-saga/effects';
import searchSaga from './sagas/search-saga';
import citySaga from './sagas/city-saga';
import forecastSaga from './sagas/forecast-saga';

export default function* rootSaga() {
  yield all([
    fork(searchSaga),
    fork(citySaga),
    fork(forecastSaga)
  ]);
}
