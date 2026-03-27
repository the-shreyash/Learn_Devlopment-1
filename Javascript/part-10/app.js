// let btns = document.querySelectorAll("button");

// btn.onclick = fucntion() {
//     alert("button was clicked");
// };

// function hello(){

//     prom("thanks for applying");
// }

// let p = btn.onclick = hello;
// console.log(p);
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("you hover on mouse ");
//     }

//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",myName);
//     btn.addEventListener("dblclick",function(){
//         console.log("user just double click on button");
//     })
// }

// function sayHello(){
//     alert("hello");
// }
// function myName(){
//     alert("shreyash");
// }


//this use in event listner ---

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");



function getRandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;

    return color;
}

function changeColor(){
    
    this.style.color = getRandomcolor();
}
btn.addEventListener("click",changeColor);

p.addEventListener("mouseenter",changeColor);

h1.addEventListener("mouseenter",changeColor);

h3.addEventListener("mouseenter",changeColor);

let input = document.querySelector("input");

input.addEventListener("keydown",function(event){
    console.log("code = ",event.code);

    if(event.code =="ArrowUp"){
        console.log("character move forward");
    }
    else if(event.code == "ArrownDown"){
        console.log("character mover downword");
    }
    else if(event.code=="ArrowLeft"){
        console.log("character move left side");
    }
    else if(event.code=="ArrowRight"){
        console.log("character move rigth side ");
    }

    console.log("keypress");
})

let form = document.querySelector("form");


form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("you are now register ");

    let inp = document.querySelector("input");
    console.dir(inp);
    console.dir(form);
    console.log(inp.value);
    
})

let inp = document.querySelector("input");
let para = document.querySelector("p");

inp.addEventListener("input",function(){
    consolo.log(inp.value);
    p.innerText=inp.value;
});



