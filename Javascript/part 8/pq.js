//check if all number in our array are multipls of 10 or not

let array = [3,10,30,50,80,90];
//using every 

let multipls_of10 = array.every((el)=>(el%10==0));
console.log(multipls_of10); 

// let final_sum = array.reduce((sum,el)=>{
    
//     return sum+el;
// });

// console.log(final_sum );
// if(final_sum%10==0){
//     console.log("true");
// }else{
//     console.log("fasle");
// }


//create a function to find the min number in an array.


// let min = array.reduce((min,el)=>{
//     if(min<=el){
//         return min;
//     }
//     else{
//         return el;
//     }
// }); 
// console.log(`min value is ${min}`);


//2nd method of finding min value ;

function getMin(arrya) {
    let final = array.reduce((min,el)=>{
        if(min<=el){
            return min;
        }
        else{
            return el;
        }
    });
    return final;
    
    
}
console.log(getMin());


