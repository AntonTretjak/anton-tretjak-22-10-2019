import {call, put, takeEvery, delay} from 'redux-saga/effects';

import {
  SEARCH,
  searchSuccess,
  searchFail,
  SEARCH_SELECT
} from '../reducers/search-results/search-actions';
import {searchPlace} from '../../api/weather-requests';
import {initWeather} from '../reducers/city-weather/city-actions';

function* search(action) {
  try {
    const requestResult =
      yield call(searchPlace, action.payload.searchString);
    if (requestResult.status === 200) {
      yield put(searchSuccess(requestResult.data));
    }
  } catch (e) {
    yield put(searchFail(e.name));
    yield delay(3000);
    yield put(searchFail(''));
  }
}

function* updateOnSelect(action) {
  yield put(initWeather(action.payload.key || action.payload.selectedKey));
}

export default function* searchSaga() {
  yield takeEvery(SEARCH, search);
  yield takeEvery(SEARCH_SELECT, updateOnSelect);
}
