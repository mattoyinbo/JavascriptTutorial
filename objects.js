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
