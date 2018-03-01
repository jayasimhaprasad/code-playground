import React, { Component } from 'react';
import {Animated,View,Text,Button, StyleSheet} from 'react-native';


class ZoomView extends Component {
    animatedValue=new Animated.Value(1);
    constructor(props){
        super(props)
    }

    zoomOut(){
        Animated.spring(this.animatedValue,{
           toValue:0.8 
        }).start();
    }


    zoomIn(){
        Animated.spring(this.animatedValue,{
           toValue:1.0
        }).start();
    }


    render(){
        const animatedStyle={
            transform:[
                {
                    scale:this.animatedValue
                }
            ]
        }
        return(
            <Animated.View  style={[animatedStyle]}>
                <Text> This is a test text from zoom view </Text>
            </Animated.View>
        )

    }


}

export default ZoomView;