function setUsername(username){
    //complext DB calculations
    this.username = username;

    console.log("called");

}

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const user = new createUser("shreaysh","shreays@gmail.com","1234");
console.log(user);;
