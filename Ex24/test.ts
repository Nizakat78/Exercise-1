//Tests for equality and inequality with strings

let   string  = "Hello ";
let string1 = "Pakistan"

console.log(`Equality of String :${ string == string1}`)
console.log(`Inequality of String: ${string != string}`)

// Tests using the lower case function

let  lowercase = "hello"
let lowercase1 ="HELLO"
console.log(`Lowercase test equality : ${lowercase == lowercase1}`)
console.log(`lowercase test inequaility :${ lowercase != lowercase1}`)

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number  =10

console.log( number =10 ) // equality 
console.log(number !== 9)  //inequality 
console.log(number >8 ) // greater then 
console.log(number<9)  //less then
console.log(number >=10)  // greater then or equal to
console.log(number <=10) //less theb or equal to 

// Tests using "and" and "or" operators

let condition1 =  true
let condition2 =false

console.log (`And operative Test : ${condition1 && condition2}`)
console.log(`OR Operative Test : ${ condition1 || condition2}`)

//Test whether an item is in a array

let array = ["Mobile", "Computer", "Camera", "LCD", "DVD" ]
let  string3 =  "Camera"

console.log(`  Test Array : ${array.includes(string3)}`)

//Test whether an item is not in a array
 let arraynotitem = [" Mobile", "Comupter", "Camera", "LCD", "DVD"]
let string4 ="TV"
 
console.log(`Not Present Item test for Array :${arraynotitem.includes(string4)}`)

