// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a")); 

let links = document.querySelector(".box a");

// for(let i = 0; i<links.length;i++){
//     links[i].style.color = "yellow";
// }

for(links of links ){
    links.style.color = " yellow";
}