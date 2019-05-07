
let todoList = ['Pray','Study','seek','find','God\'s Favor'];
programStart();

function programStart()
{

let userOption = prompt("Enter 1 to delete, 2 to update, 3 to remove items from your Todo list or 4 to view current list");

userOption = parseInt(userOption.trim(),10);

// get userinputs ranging from 1 to 4 and proceed based instructions below
switch (userOption) {
    case 1:
    let userInput =prompt('Enter todo Item to add to array');
    addTodolist(todoList,userInput);        
        
    break;
    
    case 2:
    let userInput2 = prompt("Enter Item to delete ");
    removeTodolist(todoList,userInput2);
        break;

    case 3:
    updateTodolist();
        break;

    case 4:
    if(todoList.length < 1){
      alert("You currently have no Items in your Todo list")
    }
    else{
    alert(`You have the following todo items: ${todoList}`)
    console.log(todoList);
    }
    break;

    default:
    alert("Invalid option");
    
        break;
}

}
// function to add items to todo Array
function addTodolist(todoArray,addItem){
    todoArray.push(addItem);
    for (let i = 0; i<todoArray.length; i++){
        
        console.log(`Todo Item ${i + 1}: ${todoArray[i]} `);
    
}
}
// function to delete items from todo Array
function removeTodolist(todoArray2,deleteItem){
    for (let i = 0; i<todoArray2.length; i++){
        
        console.log(`List of current items : ${i + 1}: ${todoArray2[i]} `);
        
    }  
     let  popItem = todoArray2.pop();
    console.log(`${popItem} was deleted from your Todolist`);
    
for (let i = 0; i<todoArray2.length; i++){
        
    console.log(`list of updated Item: ${i + 1}: ${todoArray2[i]} `);
    
}
}

// function to update items in todo Arrays
function updateTodolist(){}