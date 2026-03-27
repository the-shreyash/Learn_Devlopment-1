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
    username:String,
    email: String,

}) ;

const postSchema = new Schema({
    content: String,
    likes:Number,

    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
});


const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);


const addData = async ()=>{
    let user1 = new User({
        username:"shreyahs",
        email:"shjrea12@gamil.com"
    });

    let psot1 = new Post({
        conent:"i'm shreyash",
        likes:25000,
    });

    post1.user = user1;
    await post1.data();

    await user1.save();
    await post1.save(); 

}

addData();
