import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store/index';
import setupAxiosInterceptors from './globals/interceptors';
import App from './containers/App/index';
import './style.scss';

if (module.hot) {
  module.hot.accept();
}

setupAxiosInterceptors(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);