import React,{Component} from 'react'
import {View,Text,StyleSheet, Button} from 'react-native';


class CounterComponent extends Component {
        //state={count:1};
        constructor(props){
            super(props);
           // this.increment=this.increment.bind(this);
            //this.decrement = this.decrement.bind(this);
        }
        increment(){
            //newCount = this.state.count;
            //this.setState({count:this.state.count+1});
        }

        decrement(){
            //newCount =  this.state.count-1;
            //this.setState({count:newCount});
        }

        render(){
            return(
                <View  style={styles.container}>
                        <Button
                            title="Increment Count"
                            color="red"
                            onPress={this.props.increment}
                        />
                        <Text>{this.props.count}</Text>
                        <Button 
                            title="Decrement Count"
                            color="green"
                            onPress={this.props.decrement}
                        />
                </View>   
            )


        }


}


const  styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }

})

export default CounterComponent;