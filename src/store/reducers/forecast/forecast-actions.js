export const FORECAST = 'FORECAST';
export const FORECAST_SUCCESS = FORECAST + '_SUCCESS';
export const FORECAST_FAIL = FORECAST + '_FAIL';

export function initForecast() {
  return {
    type: FORECAST,
    payload: {
      isLoading: true,
      error: ''
    }
  };
}

export function forecastSuccess(payload) {
  return {
    type: FORECAST_SUCCESS,
    payload: {
      isLoading: false,
      data: payload,
      error: ''
    }
  };
}

export function forecastFail(error) {
  return {
    type: FORECAST_FAIL,
    payload: {
      isLoading: false,
      error
    }
  };
}
