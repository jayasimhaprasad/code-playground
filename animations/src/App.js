/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import FadeInView from './FadeInView';
import ExpandCollapseView from './ExpandCollapseView'
import ZoomView from './ZoomView'
import HorizontalScrollView from './HorizontalScrollView'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  showView=()=>{
    this.FadeInView.fadeIn();
  }

  hideView=()=>{
    this.FadeInView.fadeOut();
  }

  // scaleDown=()=>{
  //   this.sv.scaleUp(0.8)
  // }

  // scaleUp=()=>{
  //   this.sv.scaleUp();
  // }


  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}

        {/* <FadeInView ref={(fadeInView)=>this.FadeInView = fadeInView}>
            <Text> This view just faded in form now where...</Text>
        </FadeInView>
        <Button title="Fade In" onPress={this.showView}/>
        <Button title="Fade Out" onPress={this.hideView}/> */}
        {/* <ExpandCollapseView/>*/}

          {/* <ZoomView ref={zv=>this.zoomView=zv}/>
          <Button title="Zoom out" onPress={()=>this.zoomView.zoomOut()}/>
          <Button title="Zoom In" onPress={()=>this.zoomView.zoomIn()}/> */}
          <HorizontalScrollView ref={hv=>this.horizontalScrollView=hv}/>
          <Button title="Scroll Up" onPress={()=>this.horizontalScrollView.scrollUp()}/>
          <Button title="Scroll Down" onPress={()=>this.horizontalScrollView.scrollDown()}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
