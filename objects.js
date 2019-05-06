// DATA TYPES IN JS
// Declaring Objects and accessing Object property and Method's using 
// the dot notation. 


let person = {
    name:'John',
    age: 34,
    sex: 'Male',
    student: true,
    spouse : false,
    department:['payroll','benefits','pension'],
    hours: function workhours(hourworked,numOfDays){
        let totalHours = hourworked * numOfDays;
        return totalHours;
    },
    function () {
        console.log("Hello World");
        let a = 5; let b = 5;
        return a * b;
    }
}


console.log(person.function());
console.log(person.hours(7.50,30));
console.log(person.name);
console.log(person.age);
console.log(person.department['sort']());
for(let i = 0 ; i<person.department.length;i++)
{   person.department.sort();
    person.department;
    console.log(person.department[i]);;
}
console.log(person.function());
console.log(person.sex);
console.log(person.student);
console.log(person.spouse);
console.log(person);





// Basic syntax for Ternary Operators.
// conditions? (run if true) : (run if false); 
//conditons? action item if conditions are true : action items if conditions are false
result%2===0 ? console.log("This is an even number") : console.log("This is an odd number");

let expression =  result%2;

function response(text) {
 console.log(text + "Number ");
}

expression === 0? response("even") : response("old");

expression = 0? response("even") : response("old");

let number1 = 0;

if (number1){
    console.log("This is a true value");
}

else console.log("This is not true");

 let result = 9 ;
