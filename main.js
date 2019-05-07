let todolist = [];

let userOption = prompt("Enter 1 to delete, 2 to update, 3 to remove item");

userInput = parseInt(userOption.trim(),10);

addTodolist();
removeTodolist();
updateTodolist();
