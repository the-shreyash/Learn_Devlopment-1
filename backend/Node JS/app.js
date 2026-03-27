// let a =5;

// for(let i =0;i<a;i++){
//     console.log(i);
// }

// console.log(process.argv)

// let arg = process.argv;

// for(let i =2; i<arg.length ;i++){
//     console.log("hello to ",arg[i]);
// }


//--------modul .exports ----------

const value = require("./math");
// console.log(value.sum(1,2));


 
//----now transfer the whole directory into this file

const info = require("./fruits");

// console.log(info[0].name);

for(data  in info){
    // console.log(info[data]);
}


//declare our packeage globally 

var figlet = require("figlet");

figlet("Shreyash -The - CEO", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});






