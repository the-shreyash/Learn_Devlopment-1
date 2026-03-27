let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn= document.querySelector("button"); 



btn.addEventListener("click" ,function(){
    let item = document.createElement("li");
    item.innerText =input.value;
    ul.appendChild(item);

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

     input.value = "";
    
});
ul.addEventListener("click",function(event){
    // console.dir(event.target.nodeName );
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        // console.log("delete");
    };
});

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         console.log("delete");
//     });
// };



