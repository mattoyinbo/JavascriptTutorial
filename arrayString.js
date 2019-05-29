let text = "helloword";
let text2 = "helloword";
let textArray = [];
textArray = text.split('*');
let arrayText = textArray.join(' ');

function reverseString(inputText){
    let arrayinput = [];
    arrayinput = inputText.split('');
    arrayinput.reverse();
    let result = arrayinput.join('');
    return result;
}

let result2 =  reverseString(text2);

console.log(result2);

let var1 = ['5','8','9','2','3'];
let var2 = [];

//console.log(var1[0]) ;
console.log(var1);
//let i;
//let j;
let temp;
let j = 0;

while (j<var1.length) {
for(let i=var1.length-1;i>-1;i--){
        let temp = var1[i];  
        var2[j]= temp;
        //var2[i] = temp;
        //console.log(var2);
      j++
    }
}
console.log(var2);

let text3 = 'action is before udemy in actions like never';
let arrayEqualLength = []; 

function longestWorld(inputText2){
    let arrayinput = [];
    arrayinput = inputText2.split(' ');
    let max = '';

    for(let i = 0;i<arrayinput.length;i++){

       if (arrayinput[i].length>max.length){
           max = arrayinput[i];
           arrayEqualLength.push(max);
       }

    }

  //   let res  = arrayinput;
     //arrayinput.reverse();
    
    return max;
}

let result3 =  longestWorld(text3);

console.log(result3);
console.log(result3.length);