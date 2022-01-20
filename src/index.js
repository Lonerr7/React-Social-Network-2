import './reset.scss';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';
import store from './redux/redux-store';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} store={store} />,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  renderEntireTree(store.getState());
});
