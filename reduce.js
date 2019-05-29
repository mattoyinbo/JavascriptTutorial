//  How use  javscript reduce method.
// 


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
  

const ages = [4, 12, 24, 48, 5];

const name = ['Face','Tunde','Tunde','Femi','bablo','bablo','bablo'];


//retunr distinct names
const distinctVal = name.reduce((acc,curr) => {
console.log(curr);
if(acc.indexOf(curr) === -1){
  acc.push(curr);
}

  return acc
},[])

console.log(distinctVal);

//ruturn total number of names.

const totalObj = name.reduce((total,name) =>{
   //total[name] = 1;
if (total[name]){
   total[name] += 1; 
}
else{

  total[name] = 1;
}
  return total;
},{})

console.log(totalObj);