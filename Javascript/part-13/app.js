let url ="https://catfact.ninja/fact";


async function getFact() {
    try{
        let res = await axios.get(url);
        console.log(res);
        console.log(res.data.fact);
    }
    catch(e){
        console.log("error- ",e)
    }
}

//----------sender header-----------

let url2 = "https://icanhazdadjoke.com/";

async function jokes(){
    const config = {headers: {Accept:"application/json"}}
    try{
        let re = await axios.get(url2,config);
        console.log(re.data);
        
    }
    catch(error){
        console.log(error)
    }
}