// async function greet(){
//     throw "404 page not found";
//     return "hello ";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved")
//     console.log("result was : ",result)
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("promise was rejected with error : ",error)
// })


// function getNum(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num)
//         },1000)
        
//     })
// }

// async function demo() {
//     await getNum();
//      getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((reslove,reject)=>{
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            setTimeout(()=>{
                h1.style.color = color
                reslove("color change")
            },delay)
        }
        else{
            reject("promise reject ");
        }
        
    })
}

async function demo() {
   try{
    await changeColor("red",1000)
    await changeColor("green",2000)
    await changeColor("blue",1000)
    changeColor("pink",1000);
   }
   catch(error){
    console.log("erro catch");
    console.log(error)
   }
    let a = 10;
    console.log(a)
   console.log("shreyash")



}
demo();