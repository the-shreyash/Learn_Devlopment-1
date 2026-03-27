let btn = document.querySelector("button");

btn.addEventListener('click', async ()=>{
   let fact =  await getFacts();
   console.log(fact);
   let p = document.querySelector("#result");
   p.innerText = fact
});


let url ="https://catfact.ninja/fact";
async function  getFacts() {
    
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        return ("No fact found",e);
    }
};

let btn2 = document.querySelector("#dbtn");
dbtn.addEventListener("click",async()=>{
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("img");
    img.setAttribute("src",link);
})

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try{
        let d = await axios.get(url2);
        return d.data.message
    }
    catch(e){
        console.log("image not found");
    }
}