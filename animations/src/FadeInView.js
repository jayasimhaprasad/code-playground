import React, { Component } from 'react';
import {Animated,Tet,View, Easing} from 'react-native';


class FadeInView extends Component {

        state={
            fadeAnimation:new Animated.Value(0)
        }

       fadeIn=()=>{
        this.changeVisibilityTo(1);

       } 

       fadeOut=()=>{
           this.changeVisibilityTo(0);
       }

       changeVisibilityTo=(opacityFactor)=>{
        Animated.timing(
            this.state.fadeAnimation, {
          //      easing:Easing.bounce,
                toValue:opacityFactor,
                useNativeDriver:true,
                duration:1000
            }

           ).start()
       }

        render(){
            let {fadeAnimation} = this.state;
            return (
                <Animated.View
                    style={{
                      ...this.props.style,
                      opacity:fadeAnimation      
                    }}
                >
                    {this.props.children}
                </Animated.View>
            )
        }



}

export default FadeInView;