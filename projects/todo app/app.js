
let task = [];

let request = prompt("please the ente the reques ");
console.log(request);    

while(true){
    if(request == "quit "){
        console.log("quiting app ");
        console.log("_________");
        break;

    }

    if(request == "list"){
        for(task of todo){
            console.log("show the list ");
            console.log("____________");
        }
        
    }

    else if (request == "add"){
        let task = prompt("enter the task you want to add ");
            todo.push(task);
            console.log("task added ");
            console.log("_______________");
    }
    


}
console.log("");
