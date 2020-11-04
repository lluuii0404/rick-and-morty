import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import './assets/styles/_global.scss';

import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
