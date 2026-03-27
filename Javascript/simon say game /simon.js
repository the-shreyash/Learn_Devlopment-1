let gameSeq=[];
let userSeq=[];

let btns =["yellow","red","purple","black"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started ==false){
        console.log("game is started");
        started = true;
        levelUp();
    }
    
}); 

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash"); 
    },1000)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash"); 
    },150)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*3);
    let randcolor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randcolor}`)

    // random btn chooose

    gameSeq.push(randcolor );
    console.log(gameSeq);
    
    //  
    // console.log(ranIdx);
    // console.log(randcolor);
    // console.log(randBtn)
    gameflash(randBtn)
}

function checkAns(idx){
    //  console.log("curr level : ",level);
    //  let idx = level-1;
     if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,250) ;   
        }
    }

     else{
        document.getElementById("wrong-sound").play();

        h2.innerHTML=`game over! Your score was <b>${level}</b> <br> Press any key to start .`;
        setTimeout(document.querySelector("body").style.backgroundColor="red",1000) ;

        h2.classList("game-over");
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="whitesomke";
            h2.classList.remove("game-over");
        },150)
        reset();
     }
}

function btnPress(){
    // console.log(this);

    let btn = this;
    userflash(btn); 

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}