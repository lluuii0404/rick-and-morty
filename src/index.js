import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App/App';

import store from './store';
import history from "./utils/history";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/styles/_global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
