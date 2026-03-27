// let jsonRespons = '{"fact":"A cat has two vocal chords, and can make over 100 sounds.","length":57}'

// console.log(jsonRespons.fact);

// let ValidRspon = JSON.parse(jsonRespons);
// console.log(ValidRspon.length)

// let student = {
//     "name ":"shreyash",
//     age :20,
//     "subject":["PCM","computer Science","History"],
//     "City":"Lucknow",
// }
// console.log(student)

// let JsonData = JSON.stringify(student);
// console.log(JsonData)
// console.log(typeof(JsonData))


//-------------actual api calling using fetch()-------------


let url ="https://catfact.ninja/fact";


// fetch(url)
// .then((Response)=>{
//     // console.log(Response);
//     return Response.json();
// })
// .then((data)=>{
//     console.log("data-1 :",data.fact);
//     return fetch(url)
// })
// .then((Response)=>{
//     return Response.json()
// })
// .then((data2)=>{
//     console.log("data-2: length of cat is : ",data2.length)
// })

// .catch((error)=>{
//     console.log(error)
// }


//---using fetch with async /await-------

let url2 ="https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await fetch(url2);
        let data = await res.json();
        console.log(data.fact)
    }
    catch(e){
        console.log("error - ",e);
    }
    
}
