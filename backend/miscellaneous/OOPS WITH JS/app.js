// function personMakser(name ,age){
//    const perosn = {
//     name:name,
//     age:age,
//     talk(){
//         console.log(`hi i am ${this.name}`);
//     }

//    }
    
//     return person;
// }


// constuctor--

// function Person(name,age){
//     this.name = name;
//     this.age = age;

// };
// Person.prototype.talk = function(){
//     console.log(`hi ,i am ${this.name}`);
// }

// let p1 = new Person("shreyash",20);
// let p2 = new Person("yash",20);


//Classes

// class Person{
//     constructor(name ,age){
//         this.name = name ;
//         this.age = age;

//     }
//     talk(){
//         console.log(`Hi i am ${this.name}`);
//     }
// }

// let p1 = new Person("shryeash",22);
// let p2 = new Person("yash",22);




//Inheritance-------


class Person{
    constructor(name,age){
        console.log("parent class constructor")
        this.name =name;
        this.age = age;

    }
    talk(){
        console.log(`hi i am ${this.name}`);
    }
}


class student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor")
        super(name,age);//Parent class constructor being called
        this.marks = marks;
    }
    
}

class Teacher extends Person{
    constructor(name ,age,subject){
        super(name,age);//Parent class constructor being called
        this.subject = subject;
    }
}