import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Vanya' },
  { id: 2, name: 'Ilya' },
  { id: 3, name: 'Vadim' },
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'What is up' },
];

const posts = [
  { id: 1, postMessage: 'Hi, how are u' },
  { id: 2, postMessage: "It's my first post" },
];

ReactDOM.render(
  <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
);

reportWebVitals();
