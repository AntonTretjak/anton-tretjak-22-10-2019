import {combineReducers} from 'redux';

import search from './reducers/search-results/search-reducer';
import favoritesCitiesData from './reducers/city-weather/city-reducer';
import forecastData from './reducers/forecast/forecast-reducer';

export default combineReducers({
  search,
  favoritesCitiesData,
  forecastData
});
