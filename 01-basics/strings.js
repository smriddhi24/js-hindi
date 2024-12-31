const name = "tia"
const repoCount = 30

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
const gameName = new String('samabc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 , 3)
console.log(newString);

const anotherString =  gameName.slice(-8, 4 )
console.log(anotherString); 

const newStringOne = "   samabc123    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sam.com/sam%20hp"

console.log(url.replace('%', '-'));

console.log(url.includes('sam'));

console.log(newString.blink());


