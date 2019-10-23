import {connect} from 'react-redux';
import Favorites from '../../components/Favorites/Favorites';
import {initWeather} from '../../../store/reducers/city-weather/city-actions';
import {selectResult} from '../../../store/reducers/search-results/search-actions';

const mapStateToProps = state => ({
  cities: state.favoritesCitiesData.favoritesCities
});


const mapDispatchToProps = dispatch => ({
  getData: (key) => {
    dispatch(initWeather(key));
  },
  selectCity: (key, city) => {
    dispatch(selectResult({key, city}))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
