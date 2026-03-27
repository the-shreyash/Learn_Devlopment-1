const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express("public"));
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

// app.set("view",path.join(__dirname,"/view"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
    console.log("request received");
}) 
app.listen(port ,()=>{
    console.log(`listening th port ${port}`);
   
    
});

app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ diceValue});
})

app.get("/ig/:username",(req,res)=>{
    // let followers = ["shreyash","david","suyash","yash"];
    // let {username}=req.params;
    // res.render("instagram.ejs",{username,followers});
    // console.log(username);

    let {username}=req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    

    // console.log(instaData);

    // if(data){
    //     res.render("instagram.ejs",{data});
    // }else{
    //     res.render("error.ejs");
    // }
   
})
