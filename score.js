const myArray = [
    {name: 'John', score: 80},
    {name: 'Bob', score: 70},
    {name: 'Matt', score: 95},
    {name: 'Jane', score: 85},
    {name: 'Mary', score: 60}
    ]
    
    //Get total scores from myArray
    let totalScore = myArray.reduce( (total,curr)=> total + curr.score,0);
    
    //Find the average of total scores
    let average = totalScore/myArray.length;
    
    //first compare each score in myArray against the averageScore
    //next add new object property "curAverage" to myArray object
    //which shows if individual scores is less than or greater than 
    //curAverage.
    let overalAverage = myArray.map((element) =>{
      if(element.score > average){ 
     return element['curAverage'] = 
     `${element.score + ' is above the average score ' + average}`;
      }
    else {
      return element['currAverage'] = 
      `${element.score + ' is below the average ' + average}`
    }
    
    })
    
    
    
    console.log(myArray);
    
    
    /**
     * 
     Part 2 solution
     */


    // const students = [
    //   {name: 'John', score: 80},
    //   {name: 'Bob', score: 70},
    //   {name: 'Matt', score: 95},
    //   {name: 'Jane', score: 85},
    //   {name: 'Mary', score: 60}
    //   ]
      
    //   //Get total scores from students
    //   let sumScores = students.reduce( (total,curr)=> total + curr.score,0);
      
    //   //Find the average of total scores
    //   let average = sumScores/students.length;
      
    //   //first compare each score in students against the averageScore
    //   //next add new object property "curAverage" to students object
    //   //which shows if individual scores is less than or greater than 
    //   //curAverage.
    //   let overalAverage = students.map((element) =>{
    //     if(element.score > average){ 
    //    return element['curAverage'] = 
    //    `${true}`;
    //     }
    //   else {
    //     return element['currAverage'] = 
    //     `${false}`
    //   }
      
    //   })
      
      
      
    //   console.log(students);
      
      