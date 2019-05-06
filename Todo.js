let todolist = new Array();

// function addItems(arr,item){
//     arr.push(item);
//     console.log(arr);
// }

// addItems(todolist,"Make Coffe");
// addItems(todolist,"Walk the dog");


function addItems(arr2){
    let userInput;
userOption = parseInt(prompt('To added Items to your todolist press 1 or 2 to exit'),10);

switch (userOption) {
    case 1:
    userInput = prompt("Enter your todo Item"); 
    arr2.push(userInput);
    console.log(`You added "${arr2[arr2.length - 1]}" to your to do list`);
    addItems(arr2);
        break;

    case 2:
        console.log(`You have the following items in your Todo list: ${arr2}`)
        break;    
    default:
        break;
}
userOption == 1

//console.log(arr2);
}

addItems(todolist);

console.log(todolist);