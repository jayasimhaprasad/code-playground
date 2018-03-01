import * as ActionConstants from './constants';

export const increment=()=>{
    return {
        type:ActionConstants.INCREMENT
    }
};

export const decrement=()=>{
    return {
        type:ActionConstants.DECREMENT
    }
}


