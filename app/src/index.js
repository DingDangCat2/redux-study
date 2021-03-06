import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import {Provider} from 'react-redux';
import store from './store/store';
ReactDOM.render(
  <Provider store={store}>
    <List />
    </Provider>
,
  document.getElementById('root')
);
