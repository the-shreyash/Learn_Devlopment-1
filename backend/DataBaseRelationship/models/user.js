const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
    .then(()=>{
        console.log("connection successfull");
    })
    .catch((err)=>{
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    address: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ],

}) ;

const User = mongoose.model("User",userSchema); 

const addUser = async ()=>{
    let user1 = new User({
         username : "shreyash",
         address:[{
            
            location: "knowledge park",
            city: "noida"
         }] 
    })

    user1.address.push({location:"beta",city: "greater noida"});
    let result = await user1.save();
    console.log(result);
}

addUser();