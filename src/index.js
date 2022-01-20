import './reset.scss';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={state} store={store} />
    </Provider>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  renderEntireTree(store.getState());
});
