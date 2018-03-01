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
  Dimensions,
  Button
} from 'react-native';
import geoViewport from '@mapbox/geo-viewport'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import CreateOfflineRegion from './CreateOfflineRegion'

MapboxGL.setAccessToken('pk.eyJ1IjoiamF5YXNpbWhhcHJhc2FkIiwiYSI6ImNqZHkyaWF1aTR1ZHkyeHAwcndieWEzeWQifQ.l0jy-U4wPrcM3iIWdkpByg');

const coordinates=[77.60498998029151,12.9767659802915]
const TILE_SIZE=512
//const {width,height} = Dimensions.get('window');
const CENTER_COORD = coordinates//[-73.970895, 40.723279];
const MAPBOX_VECTOR_TILE_SIZE = 512;


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor (props) {
    super(props);

    this._mapOptions = Object.keys(MapboxGL.StyleURL).map((key) => {
      return {
        label: key,
        data: MapboxGL.StyleURL[key],
      };
    }).sort(this.onSortOptions);


    this.state = {
      styleURL: this._mapOptions[0].data,
      name: `test-${Date.now()}`,
      offlineRegion: null,
      offlineRegionStatus: null,
    };
    this.onMapChange = this.onMapChange.bind(this);
    this.onSortOptions=this.onSortOptions.bind(this);
    this.onDownloadProgress=this.onDownloadProgress.bind(this);
    this._getRegionDownloadState=this._getRegionDownloadState.bind(this);
    this.saveTheMapForOfflineUse=this.saveTheMapForOfflineUse.bind(this);
    // this.onResume = this.onResume.bind(this);
    // this.onPause = this.onPause.bind(this);
    // this.onStatusRequest = this.onStatusRequest.bind(this);

  }


  saveTheMapForOfflineUse=()=>{
    debugger;
    const { width, height } = Dimensions.get('window');
    const bounds = geoViewport.bounds(CENTER_COORD, 12, [width, height], MAPBOX_VECTOR_TILE_SIZE);

    const options = {
      name: this.state.name,
      styleURL: MapboxGL.StyleURL.Street,
      bounds: [[bounds[0], bounds[1]], [bounds[2], bounds[3]]],
      minZoom: 10,
      maxZoom: 20,
    };

    // start download
    MapboxGL.offlineManager.createPack(
      options,
      this.onDownloadProgress,
    );
  }



  onMapChange (index, styleURL) {
    this.setState({ styleURL: styleURL });
  }
  onSortOptions (a, b) {
    if (a.label < b.label) {
      return -1;
    }
  
    if (a.label > b.label) {
      return 1;
    }
  
    return 0;
  }

  async onStatusRequest () {
    if (this.state.offlineRegion) {
      const offlineRegionStatus = await this.state.offlineRegion.status();
      Alert.alert('Get Status', JSON.stringify(offlineRegionStatus, null, 2));
    }
  }

  _formatPercent () {
    if (!this.state.offlineRegionStatus) {
      return '0%';
    }
    return Math.round(this.state.offlineRegionStatus.percentage / 10) / 10;
  }

  mapLoadingFinished=()=>{
   // alert("Map loading finished....");
   //this.saveTheMapForOfflineUse()
        }

        onDownloadProgress (offlineRegion, offlineRegionStatus) {
          this._getRegionDownloadState(offlineRegionStatus.state)
        this.setState({
            name: offlineRegion.name,
            offlineRegion: offlineRegion,
            offlineRegionStatus: offlineRegionStatus,
          });
         
        }

        _getRegionDownloadState (downloadState) {
          console.log(downloadState);
          switch (downloadState) {
            case MapboxGL.OfflinePackDownloadState.Active:
              return 'Active';
            case MapboxGL.OfflinePackDownloadState.Complete:
              console.log("map download completed....");
              return 'Complete';
            default:
              return 'Inactive';
          }
        }

        render() {
          const offlineRegionStatus=this.state.offlineRegionStatus;
          return (
            <View style={styles.container}>
                <MapboxGL.MapView
                centerCoordinate={coordinates}
                  zoomLevel={11}
                  onDidFinishLoadingMap={this.mapLoadingFinished}
                  style={styles.matchParent} />
                  <View style={{width:'100%',borderColor:'red',borderWidth:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Button title="Save Map" onPress={this.saveTheMapForOfflineUse}/>  
                    {
                      (offlineRegionStatus!=null)?
                        <Text>Download: {offlineRegionStatus.percentage} %</Text>
                      :<Text>Download: Not started</Text>
                    }
                  </View>          
            </View> 
          );

    // return(<CreateOfflineRegion/>)

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
matchParent:{
    flex: 1,
    borderColor:'red',
    borderWidth:1,
    width:'100%'
  }
  
});
