//Tests for equality and inequality with strings
var string = "Hello ";
var string1 = "Pakistan";
console.log("Equality of String :".concat(string == string1));
console.log("Inequality of String: ".concat(string != string));
// Tests using the lower case function
var lowercase = "hello";
var lowercase1 = "HELLO";
console.log("Lowercase test equality : ".concat(lowercase == lowercase1));
console.log("lowercase test inequaility :".concat(lowercase != lowercase1));
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number = 10;
console.log(number = 10); // equality 
console.log(number !== 9); //inequality 
console.log(number > 8); // greater then 
console.log(number < 9); //less then
console.log(number >= 10); // greater then or equal to
console.log(number <= 10); //less theb or equal to 
// Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log("And operative Test : ".concat(condition1 && condition2));
console.log("OR Operative Test : ".concat(condition1 || condition2));
//Test whether an item is in a array
var array = ["Mobile", "Computer", "Camera", "LCD", "DVD"];
var string3 = "Camera";
console.log("  Test Array : ".concat(array.includes(string3)));
//Test whether an item is not in a array
var arraynotitem = [" Mobile", "Comupter", "Camera", "LCD", "DVD"];
var string4 = "TV";
console.log("Not Present Item test for Array :".concat(arraynotitem.includes(string4)));
