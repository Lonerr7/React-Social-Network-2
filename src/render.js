import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';

import { addPost } from './redux/state';

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />,
    document.getElementById('root')
  );
};
