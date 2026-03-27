const express = require("express");
const router = express.Router(); 



//index =user

router.get("/", (req,res)=>{
    res.send("Get the users");

})

//show--user

router.get("/:id",(req,res)=>{
    let{id}=req.params;
    res.send(`user id is ${id}`);
})
//post--user

router.post("/",(req,res)=>{
    res.send("posts for user");

})

//delete- users

router.delete("/:id",(res,req)=>{
    res.send("delete for user id");
})


module.exports = router;
