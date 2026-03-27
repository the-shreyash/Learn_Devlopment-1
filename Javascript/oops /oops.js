// const user = {
//     username:"shreyash",
//     logincount:10,
//     signedIn:true,

//     getUserDeatails:function(){
//         console.log("Got user details form database");
//         console.log(`username:${this.username}`);
//     }

// }

// console.log(user.username);
// console.log(user.getUserDeatails());


//constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this;

}

const userOne = new User("somesh",20,true);
const userTwo =new  User("shreyas",12,true);
console.log(userOne.constructor);

