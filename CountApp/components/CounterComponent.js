import React,{Component} from 'react';

import {View,Text,Button,StyleSheet} from 'react-native';


export default class CounterApp extends Component {

    constructor(props){
        super(props);
    }


    render(){

        return (
            <View style={styles.container}>
                <Button
                    onPress={this.props.increment}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase count"
                >
                </Button>
                    <Text>{this.props.count}</Text>
                <Button
                    onPress={this.props.decrement}
                    title="Decrease Count"
                    color="green"
                    accessibilityLabel="Decrease Count"
                />
            </View>

        );

    }

}


const styles= StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:"#F5FCFF",

        },

        welcome:{
            fontSize:20,
            textAlign:'center',
            margin:10,


        },
        instructions:{
            textAlign:'center',
            color:"#333333",
            marginBottom:5,
        }



    }



)