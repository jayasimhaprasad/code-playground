import React, { Component } from 'react';
import {Animated,View, Text} from 'react-native'

class HorizontalScrollView extends Component {
    state = {  }
    animatedXPosition=new Animated.ValueXY()
    animatedYPosition=new Animated.ValueXY();

    scrollUp(){
       // alert("in scrollup")
       
       Animated.parallel([
    
    Animated.spring(this.animatedXPosition,{
        toValue:-100,
       // duration:1000,
        useNativeDriver:true,
        // friction:1500,
        // tension:100
    },
    
),Animated.spring(this.animatedYPosition,{
    toValue:-200,
   // duration:1000,
    useNativeDriver:true,
    // friction:1500,
    // tension:100
},

)
  ]).start();
    }

    scrollDown(){
        Animated.spring(this.animatedYPosition,{
            toValue:250,
            //duration:1000,
            useNativeDriver:true
        }).start();
    }
    
    render() {
        // const positionYStyle={
        //     transform:[{
        //         translateY:this.animatedPosition.y
        //     }]
        // }
        const positionXStyle={
            transform:[{
                translateX:this.animatedXPosition.x
            }]
        }
        const positionYStyle={
            transform:[{
                translateY:this.animatedYPosition.y
            }]
        }
        return (
            <Animated.View style={[positionXStyle,positionYStyle]}>
                    <Text>This text is about to scroll up</Text>
            </Animated.View>
            
        );
    }
}



export default HorizontalScrollView;