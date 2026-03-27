    let max = prompt("enter the  max number ");
    

    let random = Math.floor(Math.random()*max)+1;
   
    let guess = prompt("please guess the number ");
    console.log("enter Q to quit ");

while(true){ 
   

    if ( guess ==random){
        console.log("you guess the right number ");
        break;  

    }
    else if (guess == "Q"){
        console.log("thanks for playing the game x");
        break;

    }
   
    else if (guess < random){
        guess =prompt("Hint: you enter a small number ,please try again");
        

        }
    else if(guess > random){
        guess = prompt("Hinit: you enter  big number ,please try again" );        
    }

    else{
        guess = prompt("your guess is wrong,please try again");

    }
}

