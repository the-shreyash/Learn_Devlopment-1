const mongoose = require('mongoose');
 


main()
    .then((res)=>{
        console.log("connection successful ");

    })
    .catch((err)=>console.log(err));


async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
//model

const User = mongoose.model("User", userSchema);

const Employee = mongoose.model("Employee", userSchema);


//insertOne


// const user1 = new User({
//     name:"shreyash",
//     email:"shre123@gmail.com",
//     age:22
// });

// const user2 = new User({
//     name:"adam",
//     email:"abc@gmail.com",
//     age:30
// });

// user1.save();

// user2.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


//inserMany

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:345},
//     {name:"steve",email:"steve@gmail.com",age:110},
//     {name:"bruce",email:"bruce",age:50}
// ]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//find 

//without condition

// User.find({})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// User.find({age:{$gt:40}})
//     .then((res)=>{
//         console.log(res[0].name);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


//findOne

// User.findOne({_id:'689342e54a35876a7d935b1b'})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


//deleteOne

// User.deleteOne({name:"shreyash"})
//    .then((res)=>{
//     console.log(res);
//    });

//deleteMany

// User.deleteMany({age:{$lt:30}})
//    .then((res)=>{
//     console.log(res);
//    })

//findByIdAndUpdate

// User.findByIdAndDelete({_id:"68934239ecd3add33494d96c"})
//    .then((res)=>{
//     console.log(res);
//    });

//findOneAndDelete

User.findOneAndDelete({name:"adam"})
    .then((res)=>{
        console.log(res);
    });