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
  TouchableHighlight
} from 'react-native';
import * as Actions from './actions/actions';
import {connect} from 'react-redux';

class App extends Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
        color='green'
        onPress={this.props.increment}>
          <Text>Increment</Text>
        </TouchableHighlight>        
            <Text style={styles.welcome}>
              {this.props.count}
            </Text>
        <TouchableHighlight
          onPress={this.props.decrement}>
           <Text>Decrement</Text>
        </TouchableHighlight>
      </View>
    )
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


const mapStateToProps = (state)=> ({count:state.counterReducer.count})


const mapDispatchToProps=(dispatch)=>(
  { 
      increment:()=>dispatch(Actions.increment()),
      decrement:()=>dispatch(Actions.decrement())
  })

  export default connect(mapStateToProps,mapDispatchToProps)(App);