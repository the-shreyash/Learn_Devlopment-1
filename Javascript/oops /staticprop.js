class user{
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return this.username+Math.floor(Math.random()*100);
    }
}

const user1 = new user("shhreyas");
user1.logMe();
// console.log(user1.createId());   

class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email = email;
    }

}
const teacher1 = new Teacher("yash","yash@123gmail.com")
console.log(teacher1.logMe());
console.log(Teacher.createId());