import {call, put, takeEvery, select, delay} from 'redux-saga/effects';

import {getCurrentWeather} from '../../api/weather-requests';
import {WEATHER, weatherFail, weatherSuccess} from '../reducers/city-weather/city-actions';

function* getWeather(action) {
  try {
    const weatherData = yield select((state) => state.favoritesCitiesData.favoritesCities);
    const isIncluded = Object.keys(weatherData).indexOf(action.key);

    if (isIncluded === -1) {
      const requestResult =
        yield call(getCurrentWeather, action.key);
      if (requestResult.status === 200) {
        yield put(weatherSuccess({data: requestResult.data[0], key: action.key}));
      }
    }
  } catch (e) {
    yield put(weatherFail(e.name));
    yield delay(3000);
    yield put(weatherFail(''));
  }
}

export default function* citySaga() {
  yield takeEvery(WEATHER, getWeather);
}
