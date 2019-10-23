import {connect} from 'react-redux';
import CityWeather from '../../components/CityWeather/CityWeather';
import {initWeather} from '../../../store/reducers/city-weather/city-actions';
import {initForecast} from '../../../store/reducers/forecast/forecast-actions';

const mapStateToProps = state => {
  const selectedProperty = state.favoritesCitiesData.favoritesCities[state.search.selectedKey];
  const temperatureData = selectedProperty
    ? selectedProperty.Temperature[state.favoritesCitiesData.metric]
    : {
      Value: '-',
      Unit: '-'
    };
  const temperature = temperatureData.Value + temperatureData.Unit;
  const currentStatus = selectedProperty
    ? selectedProperty.WeatherText
    : '-';

  return {
    city: state.search.selectedCity,
    cityKey: state.search.selectedKey,
    temperature,
    currentStatus,
    weeklyForecast: state.forecastData.data
  };
};

const mapDispatchToProps = dispatch => ({
  getData: (key) => {
    dispatch(initWeather(key));
    dispatch(initForecast());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityWeather);
