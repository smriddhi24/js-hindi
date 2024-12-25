// Primitive DatatypeS

// 7types: String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 10

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 426554682976434n





// Reference type (Non-Primitive Datatypes)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "spiderman"]
let myObj = {
    Name: "sam",
    age:   21,

}

let myFunction = function()
{
    console.log("hello world");
    
}

console.log(typeof anotherId );

// **************************************************************************

// stack(primitive type) and Heap (Non-Primitive )

let myYoutubename = "hcldotcom"

let anothername = myYoutubename
anothername = "abc"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "abc@gmail.com",
    upi: "123@abc"
}

let userTwo = userOne

userTwo.email = "sam@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);



