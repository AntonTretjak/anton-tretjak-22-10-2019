import React from 'react';
import { Redirect } from 'react-router-dom';

import Card from '../Card/Card';
import './index.css';

class Favorites extends React.Component {
  state = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || {},
    redirect: false
  };

  componentDidMount() {
    const keys = Object.keys(this.state.favorites);
    if (keys.length) {
      keys.forEach((item) => {
        this.props.getData(item);
      })
    }
  }

  navigateToHome = (key, city) => {
    this.props.selectCity(key, city);
    this.setState({
      redirect: true
    });
  };

  favorites = () => {
    return Object.keys(this.state.favorites) && Object.keys(this.state.favorites).map((item) => {
      const { cities } = this.props;
      const temp = cities[item];
      const temperature = temp && temp.Temperature.Metric.Value ? temp.Temperature.Metric.Value + temp.Temperature.Metric.Unit : '- -';
      return <div key={item} onClick={() => this.navigateToHome(item, this.state.favorites[item])}>
        <Card
          topText={this.state.favorites[item]}
          middleText={temperature}
          additionalText={temp && temp.WeatherText}
        />
      </div>;
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/anton-tretjak-23-10-2019'/>
    }

    return <div className='city-weather'>
      <div className='city-weather__forecast'>
        {Object.keys(this.state.favorites) && Object.keys(this.state.favorites).length ? this.favorites() : 'There is no favorites now'}
      </div>
    </div>;
  }
};

export default Favorites;
