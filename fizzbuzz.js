const prompt = require('prompt-sync')({sigint: true});

let Num = Number(prompt("Please enter a number: ")); 

console.log(Num);

/* divisible by 3 -> write fizz
divisible by 5  -> write buz
divisible by -> both write fizzguzz
*/ 

if(Num % 15 === 0){console.log("fizzbuzz")}  // divisible by 3 and 5node fizzbuzz.js
else if(Num % 3 === 0){console.log("fizz")}
else if(Num % 5 === 0){console.log("buzz")}






