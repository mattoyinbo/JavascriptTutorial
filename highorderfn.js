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
  

let ages = [4, 12, 24, 48, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let company = companies.filter((comp)=> {return comp.start >= 1980 && comp.end <= 2010
&& comp.category === 'Retail'});

console.log(company);




// chaining Array Iterators
const oldCompanies = companies.filter((element) => {
    return element.start >= 1980  && element.end <= 1999
  }).map((element2) => { element2.category = 'closed in 1980\s';
  return (element2.name +' '+ element2.start + ' ' + element2.category);});
  
  console.log(oldCompanies);
  
  console.log(companies)
  