import * as ActionConstants from '../actions/constants';

const initialState={count:0};



export default counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionConstants.INCREMENT:
            return Object.assign({},state,{count:state.count+1});
        case ActionConstants.DECREMENT:
            return Object.assign({},state,{count:state.count-1});
        default:
            return state;
    }


}