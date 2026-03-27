const express = require("express");
const router = express.Router();


router.get("/", (req,res)=>{
    res.send("Get the posts");

})

//show--user

router.get("/:id",(req,res)=>{
    let{id}=req.params;
    res.send(`posts id is ${id}`);
})
//post--user

router.post("/",(req,res)=>{
    res.send("posts for posts");

})

//delete- users

router.delete("/:id",(res,req)=>{
    res.send("delete for posts id");
})

module.exports = router