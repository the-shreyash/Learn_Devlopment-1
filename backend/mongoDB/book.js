const mongoose = require('mongoose');
 
main()
    .then((res)=>{
        console.log("connection successful ");

    })
    .catch((err)=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:1,

    }

});


const book = mongoose.model("book",bookSchema);

let book1 = new book({
    title:"The CEO",
    aurthor:"Shreyash",
    price:1000
});
book1.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);   
    });