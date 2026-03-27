let arr = [1,3,4,5,6,7];

let print = function(el){
    console.log(el);
};

arr.forEach(print);


let array = [
    {
        name:"shreaysh",
        CGPA : 9.0,
    },
    {
        name:"praveen",
        CGPA:9.5,
    },
    {
        name:"pushpu",
        CGPA:9.2,
    },
    {
        name:"Somesh",
        CGPA:8.5,
    }
];

array.forEach((student)=>{
    console.log(student);
});

let num = [1,2,3,4];

let double = num.map((a)=>{
    return a*a;
});

let nums = [2,4,1,5,6,2,7,8,9];

let t = nums.every((el)=> el%2==0);

let num2= [2,4,6];
let d =num2.every((el)=> el%2==0);


//reduce method--

let shre = [1,2,3,4];

let k = shre.reduce((res,el)=>{
    console.log(res);
    return res+el;
} );

console.log(`final result ${k}`);//final value


//finding the maximum in an array --

let array_2 = [22,32,11,10,,9,35,54,41,43,54,30];

let maximum= array_2.reduce((max,el)=>{
    if(el>max){ 
        return el;
    }
    else{
        return max;
    }
});
console.log(`max vaule is ${maximum}`);

function shreyash(a,b){
    return a/b;
}

let a = function sum(a=shreyash(),b=3){
    return a+b;
}


// spread--
//with array literals--

let even = [2,4,6,80,10];
let odd = [1,3,5,7,9,11,];

let allNums = [...even,...odd];

//destructuring ---

let friends = ["shreyash","somesh","praveen","pushpu","hemant","abc","xyz","www","eee","hell","bb","sh"];
// let winner = friends[0];
// let runnerup = friends[1];
// let secondrunnerup = friends[2];
let [winner,runnerup,secondrunnerup,...other]=friends;
// console.log(winner,runnerup ,secondrunnerup); 

//destructruing in object --

const student ={
    name:"shreyash",
    age:20,
    class:12,
    subject:["english","CS","science","Maths"],
    username:"shreaysh@123",
    password:"12345"
};

// let user = student.username;
// let password = student.password;

let {username,password}=student;
