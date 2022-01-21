import './reset.scss';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()} store={store} />
    </Provider>,
    document.getElementById('root')
  );

