export const WEATHER = 'WEATHER';
export const WEATHER_SUCCESS = WEATHER + '_SUCCESS';
export const WEATHER_FAIL = WEATHER + '_FAIL';

export function initWeather(key) {
  return {
    type: WEATHER,
    key,
    payload: {
      isLoading: true,
      error: ''
    }
  };
}

export function weatherSuccess(payload) {
  return {
    type: WEATHER_SUCCESS,
    payload: {
      isLoading: false,
      data: payload.data,
      key: payload.key,
      error: ''
    }
  };
}

export function weatherFail(error) {
  return {
    type: WEATHER_FAIL,
    payload: {
      isLoading: false,
      error
    }
  };
}
