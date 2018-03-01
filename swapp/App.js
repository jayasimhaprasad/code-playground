import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { fetchPeopleFromAPI } from './actions/actions'
import RNFS from 'react-native-fs'

class App extends Component {
  fileName=null;
  constructor(props) {
    super(props)
    this.downloadImage = this.downloadImage.bind(this);
  }

  downloadImage = () => {
    //alert('in download image..')
    
  }

  render() {
    //  const {people,isFetching,error}= this.props.people;
    const filePath = `${RNFS.DocumentDirectoryPath}/Library.png`
    console.log(filePath);
    //const imageAbsolutePath = this.state.imagePath;
  const imageUri = '/Users/jayasimhaprasad/code-playground/swapp/Library.png';
   return( 
     <View style={styles.container}>
        <TextInput
          style={{flex:1,borderColor:'blue',borderWidth:1}}
        />
       <Text>image should be at {imageUri}</Text>
       <Image style={{width:200,height:200,resizeMode:'contain'}} source={{isStatic:true,uri:filePath}} />
    </View>
   );
  }
}

/*
   {
        RNFS.exists(filePath).then((exists) => {
          if (exists) {
            console.log("file does not exist")
          } else {
            console.log("file exists..");
          }
        }
      ).catch((error)=><Text>Error occurred...</Text>
      )
    }
*/
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
  button: {
    backgroundColor: '#c0c0c0',
    height: 60,
    justifyContent: 'center',
    padding: 20
  }
});

const mapStateToProps = (state) => ({
  people: state.people
})

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())

  }
}

/*const mapDispatchToProps=(dispatch)=>{getPeople:()=>dispatch(fetchPeopleFromAPI())}*/

export default connect(mapStateToProps, mapDispatchToProps)(App);





/*    return(<View style={styles.container}>
        <Text style={styles.welcome}>
         Redux App
        </Text>
        {
          isFetching && <Text>Loading..</Text>
        }

        <TouchableHighlight 
        style={styles.button}
        onPress={this.props.getPeople}
        > 
        <Text>Fetch Data</Text>
        </TouchableHighlight>
        {
          (people.length>0)?
            people.map((person,index)=>{
            
            return (<View key={index}>
                <Text>{person.name}</Text>
                <Text>{person.birth_year}</Text>
              </View>)
            })
          
          :<Text>No Data</Text>
        }
       
       {
          
          RNFS.exists(filePath).then(
            (exists)=>{
              if(exists){
                return (
                    <Image source={require(filePath)} />
                    
                )}else{
                  return(   <TouchableHighlight 
                    style={styles.button}
                    onPress={this.downloadImage}
                    > <Text>Download Image</Text>
                    </TouchableHighlight>);
                }
              }
            
          )
          
        }
        

       </View>
    );*/