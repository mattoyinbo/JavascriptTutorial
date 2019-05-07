let todolist = new Array();

// function addItems(arr,item){
//     arr.push(item);
//     console.log(arr);
// }

// addItems(todolist,"Make Coffe");
// addItems(todolist,"Walk the dog");


function addItems(arr2){
    let userTodoItem;
    let userOption = parseInt(prompt('To added Items to your todolist press 1 or 2 to exit'),10); 

    switch (userOption) {
    case 1:
    userTodoItem = prompt("Enter your todo Item"); 
    let correct = userTodoItem;
   correct.toLocaleLowerCase().trim();
   
   checkDup(arr2,correct);
        break;

    case 2:
        console.log(`You have the following items in your Todo list: ${arr2}`)
        break;    
    default:
        break;
}
//userOption == 1

//console.log(arr2);
}

function checkDup(curArray,userTodo) {
    let exist = false;
    let index = curArray.indexOf(userTodo);

    if(index == -1){
    
        //exist = false;
        curArray.push(userTodo);
        console.log(`You added "${curArray[curArray.length - 1]}" to your to do list`);
        addItems(curArray);
    
    }
   
    else {
        console.log(`Todo Item ${userTodo} is already in your Todo list`);        
    }    
   
}
addItems(todolist);

console.log(todolist);