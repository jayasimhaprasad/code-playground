import * as Actions from './LoginActionConstants'


let initialState={
    isUserLoggedin:false,
    currentUser:null,
    loginInProgress:false
}





const loginReducer = (state=initialState,action)=>{
    switch(action.type){
        case Actions.LOGN_IN_PROGRESS:
        return {...state,loginInProgress:true} 
        case Actions.LOGIN_FAILED:
            return {...state , isUserLoggedin:false,currentUser:null}
        case Actions.LOGIN_SUCCESSFUL:
            return {...state,isUserLoggedin:true,currentUser:action.data}
        default:
            return state;
    }

};


export default loginReducer;