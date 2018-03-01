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
  View,TextInput,Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
result=null;
state={count:0}

login=()=>{
  if(this.password=="servlets"){
  this.result="Login Successful !"
  }else{
    this.result="Login Failed";
  }
  this.setState({count:this.state.count+1});
}

  render() {
    return (
      <View style={styles.container} testID="mainView">
       <Text testID="usernameLabel">UserName</Text>
       <TextInput
        style={styles.input} 
       onChangeText={(text)=>this.userName=text}
       testID="userName"
       />
       <Text>Password</Text>
       <TextInput
       style={styles.input}
       secureTextEntry={true}
       onChangeText={(text)=>this.password=text}
       testID="password"
      />
      <Button title="Login"
        onPress={this.login}
        testID="loginButton"
      />
      <Text testID="result" accessibilityLabel={this.result}>{this.result}</Text>

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
  input:{
    padding:10,
    height:40,
    borderColor:'grey',
    borderWidth:1,
    width:'80%'
  }
});
