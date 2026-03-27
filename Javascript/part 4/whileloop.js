let movie = "iron man";

let guess = prompt("enter the movie name");

while((movie != guess) && (movie != "quit")){
    if(movie == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("enter the movie name again");
    i++;    


    

}
console.log("you guess the right movie");