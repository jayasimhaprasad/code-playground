/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import store from './reducers/index' ;
import CounterComponent from './components/CounterComponent';
import {Provider} from 'react-redux';


export default class App extends Component {

    constructor(props){
      super(props);
    }

  render() {
    return (
        <Provider store={store}>
          <CounterComponent store={store}/>
        </Provider>
    );
  }
}
