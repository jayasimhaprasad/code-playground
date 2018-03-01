import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { User } from '../db/index'
import * as RealmObjects from '../db/index';
import Realm from 'realm';
class RegistrationForm extends Component {
    state = { updated: false }
    firstName = null;
    lastName = null;
    names = []
    constructor(props){
        super(props);
       //Realm.open({schema:[UserSchema]}).then(rel=>this.names=rel.objects(RealmObjects.USER));
       this.updateName=this.updateName.bind(this);
       this.saveInformation=this.saveInformation.bind(this);
         this.names=User.getAll();
    }

    componentWillMount = () => {

      
        
    }

    saveInformation = () => {
        //alert(this.firstName)
        // realm.write(() => {
        //     realm.create(RealmObjects.USER, {
        //         FirstName: this.firstName, LastName: this.lastName
        //     })
        let user=new User({ FirstName: this.firstName, LastName: this.lastName});
        // user.FirstName=this.FirstName;
        // user.lastName=this.lastName;
        user.save();
        this.setState({ updated: !this.state.updated })
    }

    updateName(name){
       // debugger;
        User.update(name,{FirstName:this.firstName,LastName:this.lastName})
        this.setState({ updated: true })
    }

    render() {
        
        return (
            <View   >
                <Text>First Name</Text>
                <TextInput
                    onChangeText={(text) => this.firstName = text}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5 }}
                />
                <Text>Last Name</Text>
                <TextInput
                    onChangeText={(text) => this.lastName = text}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5 }}

                />
                <Button
                    title="save Information"
                    onPress={this.saveInformation}
                />

                <Text> Names in the DB {this.names.length}</Text>
                {

                    this.names.map((name,index) => {
                        //alert(name);
                        return (<Text key={Math.random()} onPress={()=>this.updateName(name,index)}>{name.FirstName} {name.LastName} {name.index}</Text>);
                    })
                }


            </View>

        );
    }
}

export default RegistrationForm;