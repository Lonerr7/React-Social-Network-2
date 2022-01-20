import './reset.scss';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App state={state} store={store} />
    </StoreContext.Provider>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  renderEntireTree(store.getState());
});
