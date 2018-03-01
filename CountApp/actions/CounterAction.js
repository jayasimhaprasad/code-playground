import {connect} from 'react-redux';

import * as Actions from './ActionTypes';
import CounterComponent from '../components/CounterComponent';



const mapStateToProps = (state) =>({
        count:state.count
    });

const mapDispatchToProps=(dispatch)=>({
    increment:()=>dispatch(counterIncrement),
    decrement:()=>dispatch(counterDecrement)
})

export const counterIncrement=()=>(
 {type:Actions.COUNTER_INCREMENT});

export const counterDecrement=()=>(
 {type:Actions.COUNTER_DECREMENT})

 
 export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);
