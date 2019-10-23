import {FORECAST, FORECAST_FAIL, FORECAST_SUCCESS} from './forecast-actions';

const initState = {
  isLoading: false,
  data: [],
  error: '',
};

export default function forecastData(state = initState, action) {
  switch (action.type) {
    case FORECAST:
    case FORECAST_FAIL:
      return {
        ...state,
        ...action.payload
      };
    case FORECAST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
}
