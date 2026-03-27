const mongoose =   require("mongoose");


main()
    .then((res)=>{
        console.log("connection successful ");

    })
    .catch((err)=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

let allChats =[
    {
        from:"alice",
        to:"bon",
        msg:"hello world",      
        created_at: new Date()
        
    },
    {
        from:"bob",
        to:"alice",
        msg:"hi there",
        created_at: new Date()
    },
    {
        from:"charlie",
        to:"alice",
        msg:"how are you?",
        created_at: new Date()
    },
    {
        from:"alice",
        to:"charlie",
        msg:"I'm good, thanks!",
        created_at: new Date()
    }
]

const chat  = require("./models/chat.js"); 


chat.insertMany(allChats);

   