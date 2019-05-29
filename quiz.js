// const  examples = [
//     ['bob','john'],
//     ['banana','orange'],
//     ['hammer','nail']
// ];


// console.log(examples[2][1]);

// let item = examples[1][1];

// examples[2][1] = 'DryWall'
// console.log(examples[2]);

const quiz =  [
    ['Capital of Nigeria?','abuja'],
    ['Capital of Canada?','ottawa'],
    ['Country with the tallest building?','dubai'],
]

let score = 0;
let j = 1;
let userInput1 = [];

for (let i = 0; i<quiz.length;i++){
    let userInput2 = prompt(`${quiz[i][0]}`).toLowerCase().trim(); 
     userInput1.push(userInput2);

     if(quiz[i][1] === userInput1[i]){
         alert(`${userInput2} is the correct anwer to Question: ${quiz[i][0]}`);
        score++;
}
   else{
       alert(`${userInput2} is the wrong answer to question: ${quiz[i][0]}`);
   }   
   
}

alert(`You got ${score} anwer(s) right  and correct percent is: ${((score/3) * 100).toFixed(2)}%`);

//console.log(userInput1);
let k = 0;

while (k<quiz.length) {
    console.log(`Here are the Questions: ${quiz[k][0]} and Answer: ${quiz[k][1]}`);
   k++; 
}


// let userInput = promt(``) 