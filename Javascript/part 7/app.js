// try and catch 


console.log("hello1");

console.log("hello2");
console.log("hello3");
try{
    console.log(a); 
}catch(err){
    console.log("error occured ..");
    console.log(err);
}
console.log("hello4");
console.log("hello5");
console.log("hello6");
console.log("hello7");


// Arrow function--


const  sum = (a,b)=>{
    console.log(a+b);
}
const cube = a=>{
    return a*a*a;
}

const pow = (a,b)=>{
    return a**b;
}

const hello = ()=> {
    console.log("hello");
}


//IMPILICIT RETURN--

const add = (a,b)=>(
    a+b
);

const cub =(a)=>(a*a*a);

const pow1 = (a,b)=>(a**b);

//Set Timeout fn--


console.log("hello brother");

setTimeout(()=>{
    console.log("this is me shreyash");
},4000);


//or another to write this code is 

setTimeout(func,4000);

function func(){
    console.log("this is me shreyash");
}



//set Interval--

// let id1 = setInterval ( a,5000);

function a(){
    console.log("hello");
    console.log("shreyash");
}
//another way to write  set interval


// let id = setInterval (()=>{
//     console.log("hello");
//     console.log("shreyash");
// },5000)



//this with Arrow funcitons--

const student ={
    name : "shreyash",
    age : 20,
    mark: 95,
    prop :this,
    getName : function(){
        return this.name;
    },

    getMark: ()=>{
       console.log(this);
        return this.mark;
    }
}

