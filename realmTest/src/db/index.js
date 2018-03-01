import React from 'react';
import Realm from 'realm';

export const USER = "User"
let realm = null;
// export const UserSchema={

//     name:USER,
//     properties:{
//         FirstName:'string',
//         LastName:'string',
//         DateOfBirth:{type:'date',optional:true},
//         Address1:{type:'string',optional:true},
//         Address2:{type:'string',optional:true}
//     }
// }



export const HobbySchema={
    name:'Hobby',
    properties:{
        Name:'string',
        Description:'string',
    }
}

export const childSchema={
        name:'Child',
        properties:{
            FirstName:'string',
            LastName:'string',
            Hobbies:'Hobby[]'
        }
}

export const schema = {
        name: USER,
        properties: {
            FirstName: 'string',
            LastName: 'string',
            DateOfBirth: { type: 'date', optional: true },
            Address1: { type: 'string', optional: true },
            Address2: { type: 'string', optional: true },
            children:'Child[]'
        }
    }

export class User {
    static names=[];
    static realmNames;
    constructor(props) {

       if(props!=undefined){
        //get properties from props
        // this['FirstName'] = props.FirstName;
        //  this['LastName'] = props.LastName;
            // var keys = Object.keys(props);
            // keys.map((key)=>this[key]=props[key]);
            Object.assign(this,props);
        }
    }


    static create = (properties) => {
        realm.write(() => {

           let user= realm.create(USER, properties)
           properties.children.forEach((child)=>{
                user.children.push(child)
                currentChild=user.children[user.children.length-1];
                
             })
        })
    }

    static update=(user,updatedProperties)=>{
     //   debugger;
      propKeys = Object.keys(updatedProperties);  
      console.log(JSON.stringify(user));
      realm.write(()=>{
            propKeys.forEach((key)=>{
                console.log("key = "+key +" " + updatedProperties[key])
                user[key]=updatedProperties[key];
            })

        })
    }

    static getAll() {
        User.realmNames= realm.objects(USER);
        //return x;
        
        User.realmNames.forEach((element,index) => {
           let y=Object.assign({},element,{index:index});
           User.names.push(y);  
         });
         return  User.realmNames;
    }
}




realm = new Realm({
    schema: [User],
    schemaVersion: 4
})

//export default  Realm.open({schema:[UserSchema],schemaVersion:4})

//Realm.open()
//export const Realm
export default realm;

