import Actions from '../actions/actions';

const initialState={count:2};

const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case Actions.INCREMENT:
            return Object.assign({},state,{count:state.count+1});
        case Actions.DECREMENT:
            return Object.assign({},state,{count:state.count-1});
        default:
            return state;
    }
}

export default CounterReducer;

    



