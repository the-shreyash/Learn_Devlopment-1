const express = require("express");
const app = express();
const path=require("path");
const {v4:uuidv4} = require("uuid");

const port =8080;

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));




let posts = [
    {
        id:"uuidv4",
        username:"shreyash",
        content :"i want to be number 1 "
    },
    {
        id : "uuidv4",
        username:"yash",
        content:"i'm going to what i want in life"
    },
    {
        id:"uuidv4",
        username : "abhi",
        content:"life give you choice to choice what best for life by giving you problem "
    }

    
];



app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});


app.post("/posts",(req,res)=>{
    let {username,content}= req.body;
    let {id} = uuidv4();

    posts.push({id,username,content});
    res.send("posts request working");
    res.redirect("/posts")
})

app.get("/posts/new/:id",(req,res)=>{
    let {id} =req.params;
    console.log(id);
    let post= posts.find((p)=>id===p.id);
    console.log(post);
    res.render("show.ejs",{posts});
    
})


app.listen(port,()=>{
    console.log(`listening at port : ${port}`);
});

