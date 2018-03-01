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
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  username=null;
  password=null;
 
  state={loginResult:"not logged in (from state)"}
  loginUser=()=>{
   // alert(this.userName +"-- "+ this.password)
    if(this.password == "test"){
      this.setState({loginResult:"successfull"})
    }else {
      this.setState({loginResult:"login failed"})
    
    }
  }
  fasdfdsa
  render() {
    return (
      <View style={styles.container}>
       <Text>User name </Text>
       <TextInput
       style={{width:'80%',borderColor:'blue',borderWidth:1,height:30}}
       onChangeText={(text)=>this.userName=text}
       
       />
      <Text>Password </Text>
       <TextInput
       style={{width:'80%',borderColor:'blue',borderWidth:1,height:30}}
       secureTextEntry={true}
       onChangeText={(text)=>this.password=text}
       />
    <Button title="Login"  onPress={this.loginUser} />
    <Text>{this.state.loginResult}</Text>


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
