const { faker, en_IE } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'mysql@123',
});






app.get("/",(req,res)=>{
  let q = `SELECT COUNT(*) FROM user`;
  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    console.log(result); 
    res.send(result);
    console.log("query executed successfully");

  });
  }catch(err){
    console.log(err);
  }
  res.send("welcom to home page of the");
})

app.listen(8080,()=>{
  console.log("server is listening at port 8080");
})




let  getRandomUser=()=> {
  return [
    
    faker.person.fullName(),
    faker.internet.email(),
    faker.internet.password(),
    
  ];
}
app.get("/user",(req,res)=>{
    res.send("success");
    res.render("showuser.ejs") ;

});




// let q=" INSERT INTO user(name,email,password)VALUES ?";

// let data=[];
// for(let i=0;i<=100;i++){
//   // console.log(getRandomUser());
//   data.push(getRandomUser());
// }

// 
// connection.end();

