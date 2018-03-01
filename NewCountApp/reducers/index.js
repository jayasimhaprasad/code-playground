import {combineReducers} from 'redux';
import React from 'react';
import counterReducer from './counterReducer';


let rootReducer = combineReducers({counterReducer});

export default rootReducer;
