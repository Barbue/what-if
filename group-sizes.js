const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt("What is the size of the class: "));
console.log(classSize);

if(classSize === 16){console.log("There are 4 groups of 3 and 2 groups of 2")}
else if(classSize === 17){console.log("There are 5 groups of 3 and 1 group of 2")}
else if(classSize === 15){console.log("There are 5 groups of 3 and 0 groups of 2")}

