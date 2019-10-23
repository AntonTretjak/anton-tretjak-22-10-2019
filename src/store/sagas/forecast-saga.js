import {call, put, takeLatest, select, delay} from 'redux-saga/effects';
import {FORECAST, forecastFail, forecastSuccess} from '../reducers/forecast/forecast-actions';
import {getForecast} from '../../api/weather-requests';
import {SEARCH_SELECT} from '../reducers/search-results/search-actions';


function* fetchForecast() {
  try {
    const currentKey = yield select((state) => state.search.selectedKey);
    const requestResult = yield call(getForecast, currentKey);
    if (requestResult.status === 200) {
      yield put(forecastSuccess(requestResult.data.DailyForecasts));
    }
  } catch (e) {
    yield put(forecastFail(e.name));
    yield delay(3000);
    yield put(forecastFail(''));
  }

}

export default function* forecastSaga() {
  yield takeLatest(FORECAST, fetchForecast);
  yield takeLatest(SEARCH_SELECT, fetchForecast);
}
