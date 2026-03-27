let express = require("express");

const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening on port${port}`  );
})

// app.use((req,res)=>{
//     // // console.log(req);
//       console.log("request recieved ");
//     //sending respoonse to the server 

//    let r = res.send({
//         name:"shreyash",
//         age:20,
//         sms:"I'm student ",
//         work:"study",
//         exp:12
//     });

// })


// app.get("/",(req,res)=>{
//     res.send("you send request to the root");
// });

// app.get("/search",(req,res)=>{
//     res.send("you connacted with the route path ");
// });
// app.get("/help",(req,res)=>{
//     res.send("you connacted with the help path ");
// });

// app.get("*",(req,res)=>{
//     res.send("This path is not exist ");
// });


app.get("/:username",(req,res)=>{
    let {username}=req.params;
    // res.send(`welcome to our page ${username}`)
    // console.log("hi iam shreuyash")
    // console.log(res);
    let htmlStr =` <h1>welcome to the page @${username}</h1>`
    res.send(htmlStr);
})