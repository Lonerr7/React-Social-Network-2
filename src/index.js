import './reset.scss';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';
import store from './redux/store';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
