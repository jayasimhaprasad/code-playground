import rootReducer from './index';
import {createStore} from 'redux';
import React from 'react'


export default function configureStore(){
    let store = createStore(rootReducer);
    return store;
}