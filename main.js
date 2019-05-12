
let todoList = ['Pray','Study','seek','find','God\'s Favor'];

for(let j = 0; j<todoList.length;j++){
    todoList[j] = todoList[j].trim().toLowerCase();
}


programStart();



//function to add, update or remove items from todo Array
function programStart()
{

//get user input values bewtween 1 to 4
let userOption = prompt("Enter 1 to Add, 2 to Delete, 3 to Update items from your Todo list or 4 to view current list");

userOption = parseInt(userOption.trim(),10);

// get userinputs ranging from 1 to 4 and proceed based instructions below

switch (userOption) {
    case 1://Add items to todolist
    let userInput =prompt('Enter todo Item to add to array');
    addTodolist(todoList,userInput); //function call to add items to Todolist        
        
    break;
    
    case 2: //delete items from todo list
    removeTodolist(todoList);
        break;

    case 3: //update items in todo list
    updateTodolist();
        break;

    case 4:
    showCurItems(todoList);
    break;

    default:
    alert("Invalid option");
    
        break;
} //end switch case statement

} //end of program start function

// function to add items to todo List
function addTodolist(todoArray,addItem){
    todoArray.push(addItem);
    for (let i = 0; i<todoArray.length; i++){
        
        console.log(`Todo Item ${i + 1}: ${todoArray[i]} `);
    
}
}
// function to delete items from todo List
function removeTodolist(todoArray2){
    showCurItems(todoArray2);

    let userInput2 = prompt("Enter Item to delete");
    
    userInput2.trim().toLowerCase;
    
    let deleteIndex = todoArray2.indexOf(userInput2);
    
if(deleteIndex<0){
    alert("Item does not exist in Todo list");
    removeTodolist(todoArray2);
}

else{
     let  popItem = todoArray2.splice(deleteIndex,1);
     alert(`${popItem} was deleted from your Todolist`);
    console.log(`${popItem} was deleted from your Todolist`);
    showCurItems(todoArray2);    
    }
}

//function to display current Items in todolist
function showCurItems(currTodoList){
    
    if(currTodoList.length == 0){
            alert("You currently have no Items in your Todo list")
          }
    
    else{

    let currItem = [];
    
    //loop through array to get list of current Todo list
    for (let i = 0; i<currTodoList.length; i++){
        currItem[i] = (`${i + 1}: ${currTodoList[i]} `);
    } 
     alert(`Current Items in todo list ${currItem} `);
      console.log(currItem);
   }
}

// function to update items in todo Arrays
function updateTodolist(){

}