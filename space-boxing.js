const prompt = require('prompt-sync')({sigint: true})

let earthweight = Number(prompt("Enter your Earth weight: "));console.log(earthweight)

let planetNum = Number(prompt("Please enter the number of the planet you will be traveling to using the following system. 1 - Venus, 2-Mars, 3-Jupiter, 4-Saturn, 5-Uranus, 6-Neptune:  "));
console.log(planetNum);

if(planetNum === 1){console.log(128*0.78)}
else if(planetNum === 2){console.log(128*0.39)}
else if(planetNum === 3){console.log(128*2.65)}
else if(planetNum === 4){console.log(128*1.17)}
else if(planetNum === 5){console.log(128*1.05)}
else if(planetNum === 6){console.log(128*1.23)}


