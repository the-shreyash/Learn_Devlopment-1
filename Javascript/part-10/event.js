let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");

div.addEventListener("click",function(){
    console.log("div was click");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
    ul.style.backgroundColor="red";
});

for(li of li ){
    li.addEventListener("click",function(){
        event.stopPropagation();
        console.log("li was click");
        
        
    });
};