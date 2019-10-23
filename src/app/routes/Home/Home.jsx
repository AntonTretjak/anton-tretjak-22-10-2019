import * as React from "react";
import Search from '../../containers/SearchContainer/SearchContainer';
import CityWeather from '../../containers/CityWeatherContainer/CityWeatherContainer';

const Home = () => <div>
  <Search />
  <CityWeather />
</div>;

export default Home;
