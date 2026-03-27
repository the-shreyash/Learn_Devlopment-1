const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();
const app = express();
const cookieParser = require("cookie-parser");

const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.use(express.json());
app.use(cookieParser('12345mysecret'));

app.get("/getsignedCookie",(req,res)=>{
    // console.log(process.env.JWT_SECRET);
    res.cookie("made-in","india",{httpOnly:true,secure:true,signed:true,maxAge:2000});
    res.send("signed cookies sent"); 
})

app.get("/verify", (req,res)=>{
    console.log(req.signedCookies);
    console.log(req.cookies);
    // console.log(process.env.JWT_SECRET);
    
    res.send("verify");
})





app.get("/getcookies",(req,res)=>{
    res.cookie("greet","hello");
    res.cookie("name","shreyash");
    res.send("Sent you some cookies");
 
})

app.get("/greet",(req,res)=>{
    let{name = "anonymous"}= req.cookies;
    res.send(`hi ${name}`);
})

app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("hi i am root path ");
})


// //index =user

// app.get("/users", (req,res)=>{
//     res.send("Get the users");

// })

// //show--user

// app.get("/users/:id",(req,res)=>{
//     let{id}=req.params;
//     res.send(`user id is ${id}`);
// })
// //post--user

// app.post("/users",(req,res)=>{
//     res.send("posts for user");

// })

// //delete- users

// app.delete("users/:id",(res,req)=>{
//     res.send("delete for user id");
// })


app.use("/users",users); 


//posts

//index 

// app.get("/posts", (req,res)=>{
//     res.send("Get the posts");

// })

// //show--user

// app.get("/posts/:id",(req,res)=>{
//     let{id}=req.params;
//     res.send(`posts id is ${id}`);
// })
// //post--user

// app.post("/posts",(req,res)=>{
//     res.send("posts for posts");

// })

// //delete- users

// app.delete("posts/:id",(res,req)=>{
//     res.send("delete for posts id");
// })

app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("server is listening to 3000");
})



