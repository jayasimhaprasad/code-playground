/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import {
  Platform,
  StyleSheet,
  AppRegistry,
  Text,
  View,
  Image,
} from 'react-native';
import RNFS from 'react-native-fs';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isDone: false,
    };
    this.onDownloadImagePress = this.onDownloadImagePress.bind(this);
    this.dowloadImage = this.dowloadImage.bind(this);
  }
  fileName='kt_Masai2.jpg';

  async dowloadImage(){
      r= RNFS.downloadFile({
        fromUrl: 'http://images.traveledge.com/assets/locale/photos/'+this.fileName,
        toFile: `${RNFS.DocumentDirectoryPath}/${this.fileName}`,
      })
      debugger;
      result = await r.promise;
      
      alert(JSON.stringify(result));
      return true;
  }

  onDownloadImagePress() {

    this.dowloadImage().then( this.setState({ isDone: true })).catch((error)=>alert("error occurred"+error))
  }

  render() {
    const preview = this.state.isDone ? (<View>
      <Image style={{
        width: '100%',
        height: 300,
        backgroundColor: 'black',
      }}
        source={{
          uri: `file://${RNFS.DocumentDirectoryPath}/${this.fileName}`,
          scale: 1
        }}
      />
      <Text>{`file://${RNFS.DocumentDirectoryPath}/${this.fileName}`}</Text>
    </View>
    ) : null;
    return (
      <View>
        <Text onPress={this.onDownloadImagePress}>Download Image</Text>
        {preview}
      </View>
    );
  }
}
