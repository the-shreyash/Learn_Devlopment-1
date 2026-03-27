const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const flash = require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const session =  require("express-session");

const sessionOption = {
        secret:"mysupersecretstring",
        resave:false,
        saveUninitialized:true,
}; 


app.use(session(sessionOption));
app.use(flash());

app.get("/register",(req,res)=>{
    let {name = "Guest"} = req.query;
    req.session.name = name;
    req.flash("success","user registerd successfully");

    // res.send(`welcome ${name}`);
    res.redirect("/hello");
})


app.get("/hello",(req,res)=>{
    
    // res.send(`hello ${req.session.name}`);
    // console.log(req.session.name);
    // res.locals.messages = req.flash("success")
    // res.render("page",{name:req.session.name, });
})

app.get("/reqcount",(req,res)=>{
    if(req.session.count){
       req.session.count++;

    }
    else{
        req.session.count = 1;
    }
    
    res.send(`You sent a request ${req.session.count} times`);
})


app.get("/test",(req,res)=>{
    res.send("Test successful!");
})


app.listen(3000,()=>{
    console.log("server is listening to 3000");
});