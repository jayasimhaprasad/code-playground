import * as Actions from './constants';


function getPeople(){
    return {
        type:Actions.FETCHING_PEOPLE}

}


function getPeopleSuccess(data){
    return {
        type:Actions.FETCHING_PEOPLE_SUCCESS,
        data:data
    }


}


function getPeopleFailure(data){
    return {
        type:Actions.FETCHING_PEOPLE_FAILURE,
        data:data
    }

}

export function fetchPeopleFromAPI(){

    return(dispatch)=>{
        dispatch(getPeople());
        fetch("https://swapi.co/api/people")
        .then(result=>result.json())
        .then(json=>dispatch(getPeopleSuccess(json.results)))
        .catch(error=>dispatch(getPeopleFailure(data)))
    }

}