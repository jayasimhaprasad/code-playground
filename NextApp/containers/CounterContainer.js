import React,{Component} from 'react'
import CounterComponent from '../components/CounterComponent'
import  {connect} from 'react-redux';
import Actions from '../actions/actions';
class CounterContainer extends Component {
    render(){

        return (
                <CounterComponent/>)
    }
}


const mapStateToProp=(state) =>{
    return {
        count:state.counterReducer.count
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
            increment:()=>dispatchEvent(counterIncrement),
            decrement:()=>dispatchEvent(counterDecrement)
    }
}

export const counterIncrement=()=>{
    return {type:Actions.INCREMENT};
}

export const counterDecrement=()=>{
    return {type:Actions.DECREMENT}
}

export default connect(mapStateToProp,mapDispatchToProps)(CounterContainer);