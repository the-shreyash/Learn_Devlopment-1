// // console.log("hello world  ");
// // let a ,b;
// // a= 5;
// // b= 10;
 
// // let  sum =a+b;
// // console.log(sum);

// // let num;
// // num = 1+2;
// // console.log(num);


// let shoePrice = 1000;

// let pantPrice = 1500;

// let output ;

// // output = " the total price is : " + (shoePrice + pantPrice) + " "+  "rupees";

// output = `the total price is  : ${shoePrice+pantPrice} rupees`;

// // . back tick (` symbole`)

// console.log(output)

function getSlice (str,start,end ){
    console.log("original string :",str);
    console.log("After slice ",str.slice(start,end));
}

getSlice("hello world ");

function cut(str,startIndx,endIndx){
    let newStr = "";
    for(let i = 0, i<= 5, i++){
        newstr = newStr + str[i];

    }
}