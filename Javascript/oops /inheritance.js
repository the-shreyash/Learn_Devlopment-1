class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;

    }
    addCourse(){
        console.log(`new course added by ${this.username}`);
    }
}
const teacher  = new Teacher("shreyash","shre12@gmail.com","1234");
teacher.logMe();
teacher.addCourse();

console.log(teacher instanceof Teacher);
console.log(teacher instanceof user);