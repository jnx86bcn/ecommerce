import React from 'react';
import * as ReactDOM from 'react-dom';

import '../branding/styles/main.scss';

import { Provider } from 'react-redux';
import { initStore } from '../redux/reducers';

import { App } from './App';

export const main = document.getElementById('app');

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  main
);
