import counterReducer from './countReducer';
import {combineReducers,createStore} from 'redux';

const applicationReducer = combineReducers({counterReducer});

 const rootReducer = (state,action)=>{
     return applicationReducer(state,action);
 }

let store = createStore(rootReducer);

export default store;
