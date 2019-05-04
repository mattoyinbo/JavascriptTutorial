/*
Arrays are simply list of values and are zero indexed based.
Objects are collections of Values such as properties,method's and Events 
*/

let newArray = [];
let newArray1 = ["John","Peter","bob","barry","ben"];
let fruits = ["Apple","Mango","Banana","Pear"];
let newArray2 = new Array ("grace","favour","Love");
// let person = {
//     name:"Matthew",
//     occupation : "Web Developer",
//     url : "WWW.MATTECHO.COM",
//     domain : "Go Daddy"
// }

console.log(newArray1.length);
let indexVal = newArray1.length-1;

console.log(newArray1.concat(fruits));
let comBine = newArray1.concat(fruits)
console.log(comBine.sort());
// Unshift
console.log(comBine.unshift("Orange"));
//shift
console.log(comBine.shift());
console.log(comBine);
console.log(comBine.push("I love all this fruits"));

console.log(comBine.push("I love fruits always"));
console.log(comBine);
console.log(comBine.pop());
console.log(comBine);

console.log(comBine.splice(comBine.length - 5, 4));
console.log(comBine);
