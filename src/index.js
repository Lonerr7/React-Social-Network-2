import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state, { addPost } from './redux/state';

ReactDOM.render(
  <App state={state} addPost={addPost} />,
  document.getElementById('root')
);

reportWebVitals();
