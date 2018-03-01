import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux'
import React, { Component } from 'react'
import store from './Store'
class EntryPoint extends Component{

        render(){
            <Provider store={store}>

                <App/>
                </Provider>

        }


}


AppRegistry.registerComponent('loginApp', () => EntryPoint);
