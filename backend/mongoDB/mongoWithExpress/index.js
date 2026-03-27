const express = require('express');

const app = express();

const mongoose =   require("mongoose");
const path = require("path");
const chat  = require("./models/chat.js"); 

app.use("views",path.join(__dirname,"views"));
app.use("view engine","ejs");


main()
    .then((res)=>{
        console.log("connection successful ");

    })
    .catch((err)=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

app.get("/chats",async (req,res)=>{
    let chats = chat.find();
    console.log(chats);
    res.send("working");
    res.render("chats",{chats});
})

app.get("/",(res,req)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});



let chat1 = new chat({
    from:"alice",
    to:"bon",
    msg:"hello world",
    created_at: new Date()
});

chat1.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });