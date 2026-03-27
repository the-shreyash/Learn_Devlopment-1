
let myHeros = ["Thor", "Spiderman"];

let heroPower ={
    Thor:"hammer",
    Spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.shreyash = function(){
    console.log(`"shreyash is present in every object `);
}
// heroPower.shreyash();
// myHeros.shreyash();

Array.prototype.heyShreaysh = function(){
    console.log("hey shreyash");
}

// myHeros.heyShreaysh();
// heroPower.heyShreaysh();



//inheritance

const teacher = {
    makeVideo: true 
}

const TeachingSupport ={
    isAvailable:false
}

const TAsupport = {
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

// teacher.__proto__ = User;


//modren syntax

Object.setPrototypeOf(TeachingSupport,teacher);


let anotherUsername = "shreyash     ";

String.prototype.truelength = function(){
    console.log(`true length is :${this.trim().length}`); 
}

anotherUsername.truelength();
"yadav  ".truelength();