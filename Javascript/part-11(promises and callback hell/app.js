// function hello(){
//     console.log("inside the hello ");
//     console.log("hello");
    
// }

// function demo(){
//     console.log("calling hello function");
//     hello();
// }

// console.log("calling demo function");
// demo()



// setTimeout(()=>{
//     console.log("shreyas");
// },2000);

// console.log("hello");


//----------------------------------------------callback hell------------------------------------------

// let h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";    
// },2000)

// setTimeout(()=>{
//     h1.style.color="blue"
// },3000)

// setTimeout(()=>{
//     h1.style.color="pink"
// },4000)


//new technique of writing this code 

// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color= color;
//     },delay);
// };

// changeColor("red",1000);
// changeColor("yellow",2000);
// changeColor("blue",3000);



// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout (()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// };

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("pink",1000)
//         });
//     });
// });



//----------------------promises------------------
//--------------callback hell sitution in following code ----------



// function saveToDb(data,success,faliure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }
//     else{
//         faliure();
//     }
// }

// saveToDb("shreays",()=>{
//     console.log("success: Your data is saved ");
//     saveToDb(
//         "yadav",()=>{
//         console.log("success2: second data is saved");
//             },
//         ()=>{
//                 console.log("failure2: weak data connection");
//         }
//     )

//     saveToDb("Somesh",
//         ()=>{
//             console.log("success3:your data was saved");
//         },
//         ()=>{
//             console.log("failure3 : week connection");
//         }

//     )
// },
// ()=>{
//     console.log("Faliure: Your data is not save");
// }
// )



//this complex sitution is reslove by the promises 


function saveToDb(data){
    return new Promise((reslove,reject)=>{
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            reslove("success: Data was saved");
        }else{
            reject("faliure: weak connection");
        }
    });
}

// let request = saveToDb("shreyash");

// request.then(()=>{
//     console.log("promise -1 was resoled");
//     console.log(request);
//     let request2= saveToDb("yadav");
//     request2.then(()=>{
//         console.log("Your second data was store ");
//         console.log(request2)
//     })
//     .catch(()=>{
//         console.log("second data is not store ");
//         console.log(request2)
//     })

// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// })




// saveToDb("shreyash")
// .then(()=>{
//     console.log("promise -1 was resoled");
    
//     saveToDb("yadav")
//     .then(()=>{
//         console.log("Your second data was store ");
//     })
//     .catch(()=>{
//         console.log("second data is not store ");
//     })

// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// })




// ---improved version-----


saveToDb("shreyash")
.then((result)=>{
    console.log("data 1 saved");
    console.log("result of promise" ,result)
    return saveToDb("yadav");
})
.then((result)=>{
    console.log("data 2 saved");
    console.log("result of promise : ",result);
    return saveToDb("yash");
})
.then(()=>{
    console.log("data 3 saved ");
    console.log("result of promise : ",result)
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promises : ",error)
})



let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            h1.style.color = color
            reslove("color change");
        },delay)
    })
}



changeColor("red",1000)
.then(()=>{
    console.log("red color is completd");
    return changeColor("green",1000)
})
.then(()=>{
    console.log("green color is completed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color is completed")
    return changeColor("purple",1000);
})
.then(()=>{
    console.log("purple was completed");
})
