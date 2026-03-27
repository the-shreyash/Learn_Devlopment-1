function multipleGreet(func,n){
    for(let i = 1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("hello Shreyash");
    console.log("welcome back");
}
// multipleGreet(greet,3); 


let mutliHi = function(hifunc, count){
    for(let j= 1; j<=count; j++){
        console.log(j);
        hifunc();
    }
}


let hi = function(){
    console.log("hi");
    console.log("shreyash");
}
// mutliHi(hi,3)




let oddAndEvenFactory = function(request){

    if(request = "even"){
        let even = function(n){
            console.log(n%2 ==0);
            console.log("this is even number ");
        }
        return even;
    } 
    else if(request == "odd"){
        let odd = function(n){

            console.log(!(n%2==0));
            console.log("this is odd number ");
        }
        return odd;
    }
    else{
        console.log("wrong request ");
    }

 

    
}

let student ={
    name : "shreyash",
    age: 20,
    math:89,
    phy:85,
    chem:81,

    getAvg(){
        let avg = (this.math+this.phy+this.chem)/3;
        console.log(avg);
    }
    

}




