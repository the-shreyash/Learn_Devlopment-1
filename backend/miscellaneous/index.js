const express = require("express");
const app = express();

const port  =8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`listening th port ${port} `); 
})

app.get("/register",(req,res)=>{
    let {user,password}=req.query;

    res.send(`Standard GET response. welcome,${user} `);
    
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    let {user,password}=req.body;

    res.send(`Standard POST response .wecome ${user}` );
    // console.log("post request accept")
});