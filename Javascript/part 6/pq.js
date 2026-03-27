  function rollDice(){
    let randam = Math.floor(Math.random()*6)+1;
    console.log(randam);
  }
//   rollDice();


//function that give us avg of three number .

function avg(a,b,c){
    av=(a+b+c)/3
    console.log(av);
}


// avg(1,2,3);


//print number that print the multiplication table of a number.


function printTable(a){
    
    for ( let i  =1 ; i<=10; i++){
        console.log(a*i);
    }
}
// printTable(2);
// console.log("anoter number ");
// printTable(5);




//create a function that returns the sum of number from 1 to n.


let sum = 0;
function getSum(a){
    let i ;
    for(i =1; i<=a;  i++){
        
      sum+=i;
    }
    return sum ; 
}

// console.log(getSum(3));



//create a function that returns the concatenation of a ll strings in an array.

let str = ["hi","hello","bye","i"];

function concat(str){
  let result   = "";
  for(let i =0; i<=str.length; i++){
    result +=str[i]; 
  }
  return result;
}

//what will be the output?

let greet = "hello";

function changeGreet(){
  let greet = "namaste";
  console.log(greet);
  
  function innerGreet(){
    console.log(greet);

  }
  
}

console.log(greet);
changeGreet();

