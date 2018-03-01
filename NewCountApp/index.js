import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './reducers/configureStore';
import { Provider } from 'react-redux';
import React from 'react';
 import SQLite from 'react-native-sqlite-storage';

 function errorCB(err){
     console.log("SQL Error"+ error);
 }

 function successCB(){
     console.log("SQL Executed fine");
 }

 function openCB(){
     console.log(" new database opened successfully");

    //  KTMobileDB.executeSql('CREATE TABLE IF NOT EXISTS COUNTER_TABLE(COUNTER_FIELD integer)');
    //  KTMobileDB.executeSql("select counter_field from counter_table",(tx,results)=>{
    //              console.log("query executed successfullly");
        
    //         });
   /* KTMobileDB.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS COUNTER_TABLE(COUNTER_FIELD integer)', [],
        function(tx, result) {
        alert("Table created successfully");
        },
        function(error) {
            alert("Error occurred while creating the table.");
        });
        });*/

       /* KTMobileDB.transaction(function(transaction) {
            transaction.executeSql('SELECT * FROM COUNTER_TABLE)', [],
            function(tx, result) {
            alert("query completed successfully...");
            },
            function(error) {
                alert("error occurred while querying counter field.",error);
            });
            });*/
           /* KTMobileDB.transaction((tx)=>{
                console.log("Executing query...");
                tx.executeSql("insert into counter_table values(1)",[],(tx,results,error)=>{
                    alert(results.rows.length);
                })  
            })*/

        KTMobileDB.transaction((tx)=>{
            console.log("Executing query...");
            tx.executeSql("select * from counter_table",[],(tx,results,error)=>{
                alert(results.rows.item(0).COUNTER_FIELD);
            })  
        })    

 }

 export const  KTMobileDB =  SQLite.openDatabase({name:"KTMobile.db"},openCB,errorCB);//"KTMobile.db","1.0","Test Database",200000,openCB,errorCB);
 
 //KTMobileDB.open();
 

//var test = SQLite.openDatabase({name:"KTMobile.db"});
// console.log("running query log now...");

//     KTMobileDB.executeSql("select counter_field from counter_table",(results)=>{
//         console.log("query executed successfullly");

//     });

   
let store = configureStore();
const CounterApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
AppRegistry.registerComponent('NewCountApp', () => CounterApp);
