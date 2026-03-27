const express = require('express');

const app = express();

const mongoose =   require("mongoose");
const path = require("path");
const ExpressError = require("./expressError.js");

main()
    .then((res)=>{
        console.log("connection successful ");

    })
    .catch((err)=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');


}

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/err",(res,req)=>{
    abcd = abcd;
});

// app.use((err,req,res,next)=>{
//     let {status,message}=err;   //extracting status and message from err object
//     console.log("----ERROR_---");
//     next(err);
//     res.status(status).send(message);


// });

app.use((err,req,res,next)=>{
    let{status =500,message = "some error occured"}=err;
    res.status(status).send(message);
})
