//Quaters will be worth 25cents
// dime 10cents
// nickel 5 cents
// penny 1 cent


function returnChange(amount){
    let quaters = Math.floor(amount/25);
    console.log(`You have ${quaters} Quaters in your change`);
    amount = amount%25;
    
    let dime = Math.floor(amount/10);
    console.log(`You have ${dime} Dimes in your change`);
    amount = amount % 10;
    
    let nickel = Math.floor(amount/5);
    console.log(`You have ${nickel} Nickels in your change`);
    amount = amount % 5;
    
    let penny = Math.floor(amount/1);
    console.log(`You have ${penny} Pennies in your change`);
    amount = amount % 1;
    console.log(amount);

    console.log(`Initial Amount is : ${(quaters*25) + (dime*10) + (nickel*5) + (penny * 1)}`); 
}


returnChange(100);