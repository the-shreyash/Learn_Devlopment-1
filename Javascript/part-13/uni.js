let url = "http://universities.hipolabs.com/search?name=";


let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let countery = document.querySelector("input").value;
    console.log(countery);
    let p = document.querySelector("p");
    let collArr = await getCollege(countery);
    let c = show(collArr);
    console.log(c)
    
    
    
    
})

function show(collArr){
    let list = document.querySelector("#list");
    list.innerText="";
    for(coll of collArr){

        console.log(coll.name)
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li)
    }
}

async function getCollege(countery) {
    try{
        let data = await axios.get(url+countery);
        return data.data;
    }
    catch(error){
        console.log("countery not found ",error);
    }
}