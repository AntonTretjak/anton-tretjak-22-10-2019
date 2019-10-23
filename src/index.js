import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import './app/index.css';
import App from './app/App';
import createStore from "./store/store";

const { store } = createStore();

const Application = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const root = document.getElementById('root');

ReactDOM.render(Application, root);
