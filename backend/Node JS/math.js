const sum = (a,b)=>(a+b);
const multiply =(a,b)=>(a*b);
const pi = 3.14
const g = 10;

// module.exports = 123;    //this is genraly improt the 123 to the other file 

let obj = {
    sum : sum,
    mul : multiply,
    pi  : 3.14,
    g:10

}


module.exports = obj;

module.exports={
    sum : sum,
    mul : multiply,
    pi  : 3.14,
    g:10
}






