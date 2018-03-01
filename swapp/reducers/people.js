import * as Actions from '../actions/constants';

const initialState={
people:[],
isFetching:false,
error:false
}


export default peopleReducer=(state=initialState,action)=>{

        switch(action.type){
            case Actions.FETCHING_PEOPLE:
                //return Object.assign({},state,{isFetching:true},{people:[]});
                return {
                    ...state,
                    isFetching:true,
                    people:[]
                }
            case Actions.FETCHING_PEOPLE_SUCCESS:
                return {
                    ...state,
                    isFetching:false,
                    people:action.data
                }


            case Actions.FETCHING_PEOPLE_FAILURE:
                return {
                    ...state,
                    isFetching:false,
                    error:true,
                    people:[]
                }
            default:
                return state;
        }

}