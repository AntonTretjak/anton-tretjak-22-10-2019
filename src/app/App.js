import React from 'react';

import {Switch, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './routes/Home/Home';
import Favorites from './routes/Favorites/Favorites';


const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/anton-tretjak-23-10-2019' component={Home} />
        <Route exact path='/anton-tretjak-23-10-2019/favorites' component={Favorites} />
      </Switch>
    </div>
  );
};

export default App;
