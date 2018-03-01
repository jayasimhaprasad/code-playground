import loginReducer from './LoginReducer'
import {combineReducers,createStore} from 'redux'

let masterReducer = combineReducers({
    login:loginReducer
})
let store = createStore(masterReducer);

export default store;
