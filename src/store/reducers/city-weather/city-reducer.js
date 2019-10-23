import {WEATHER, WEATHER_FAIL, WEATHER_SUCCESS} from './city-actions';

const initState = {
  isLoading: false,
  favoritesCities: {},
  error: '',
  metric: 'Metric'
};

export default function favoritesCitiesData(state = initState, action) {
  switch (action.type) {
    case WEATHER:
    case WEATHER_FAIL:
      return {
        ...state,
        ...action.payload
      };
    case WEATHER_SUCCESS:
      const cities = {
        ...state.favoritesCities,
        [action.payload.key]: action.payload.data
      };
      const newState = {
        ...state,
        error: action.payload.error,
        isLoading: action.payload.isLoading,
        favoritesCities: cities
      };
      return newState;
    default:
      return {
        ...state
      };
  }
}
