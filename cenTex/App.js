import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './src/reducers';

import Main from './src/main';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(Reducer)}>
         <Main />
      </Provider>
    );
  }
}
