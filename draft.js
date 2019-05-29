//Higher order function

// function functionName(para,para2){

//     // code here
// }

// // alert('Hello');

// // ;
// setInterval(function (){
//    alert('Hello World'); 
// },10000);


// setInterval(sayHi,3000);

// function sayHi() 
// {
//     alert('Welcome');
// }
// let newArray = ['4','5','8','7','8']
// len = (array) => array.length;
// result = len(newArray);
// console.log(result)
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  

  const ages =
[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


getFirstName = (userObject) => userObject.faculty;
result = getFirstName(
    { department: 'science',
      faculty : 'computer' ,
     code : 55,
     hours : (workHours,days)=> `workHours * days :${workHours * days} `
});
console.log(result)

let name = {
    firstname: 'femi',
    age:28,
    school: 'University',
    obj : { department: 'science',
            faculty : 'computer' ,
            code : 55
    }
}

users = {
    firstName: 'Yazeed'
  };
  

console.log(users.firstName);  
console.log(name);
console.log(name['firstname']);

/******************************************
 **** Filer HighOrder Functions************

  for(let i = 0 ; i<companies.length;i++){
      console.log(companies[i]);
    }

    companies.forEach(
        function(company)
{console.log(`Name: ${company.name} start year :${company.start} End Year :${company.end}`);
    })


    let companyCat = [];

    for(let i=0 ; i<companies.length;i++){
        if(companies[i].category != 'Technology'){
            companyCat.push(companies[i])
        }
    }

console.log(companyCat);

let ageFilter = 
companies.filter(
    function(age2)
    { 
        return age2.category === 'Technology' }
    );

let ageFilter2 = companies.filter(age3 =>  age3.category === 'Technology')

console.log(ageFilter2);



Get an array retailcompany


let retailcompany = companies.filter( ages => ages.category === 'Retail' );

console.log(retailcompany);

get 2000s companies
let company1980 = companies.filter
( compStart => compStart.start < 2011 && compStart.start > 2000 );

console.log(company1980);

get comapnies that lasted ten years or more
let companyDuration= companies.filter
( comp => (comp.end - comp.start >= 10));

console.log(companyDuration);
 */
