 async function A(){

        return "hello from a..."
}

async function B(){
    console.log("goind to await..")
    let b= await A();
    console.log("await over..")
    return b;
}

async function C(number){
    if(number%2==0){
        return "Even";
    }else{
        throw "Odd";
    }

}

C(11)
.then((result)=>{console.log("number is "+result)})
.catch((error)=>{console.log("number is "+error )})


//B().then((outcome)=>console.log(outcome)).error((msg)=>console.log(msg));