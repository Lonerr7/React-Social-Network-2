import './reset.scss';
import './index.scss';

import state, { subscribe } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';

import { addPost, updateNewPostText } from './redux/state';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById('root')
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);