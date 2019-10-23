import React from 'react';
import moment from 'moment';

import Card from '../Card/Card';
import './index.css';

class CityWeather extends React.Component{
  state = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || {}
  };

  componentDidMount() {
    this.props.getData(this.props.cityKey);
  }

  componentWillUnmount() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
  }

  setToFavorite(key, city) {
    if (this.state.favorites[key]) {

    }
    this.setState({
      favorites: {...this.state.favorites, [key]: this.state.favorites[key] ? undefined : city}
    }, () => {
      localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    });
  }

  render() {
    const { city, temperature, weeklyForecast, currentStatus, cityKey } = this.props;

    const getTemperature = (item) => {
      const temp = item.Temperature.Maximum;
      return temp ? temp.Value + temp.Unit : '- -'
    };

    const forecasts = weeklyForecast && weeklyForecast.map((item, index) =>
      <Card key={index} topText={moment(item.Date).format('ddd')} middleText={getTemperature(item)} />);

    return <div className='city-weather'>
      <div className='city-weather__current'>
        <div className='city-weather__info'>
          <div className='city-weather__city-icon'>

          </div>
          <div className='city-weather__city-info'>
            <span>{city}</span>
            <span>{temperature}</span>
          </div>
        </div>
        <div
          className={`city-weather__favorite ${this.state.favorites[cityKey] ? 'city-weather__favorite_selected' : ''}`}
          onClick={() => this.setToFavorite(cityKey, city)}
        >
          <span>Favorites</span>
        </div>
      </div>
      <div className='city-weather__status'>
        {currentStatus}
      </div>
      <div className='city-weather__forecast'>
        {forecasts}
      </div>
    </div>;
  }
};

export default CityWeather;
