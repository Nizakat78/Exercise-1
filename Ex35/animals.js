// Array of animals with a common characteristic
var Animals = [" Dog", " Cat", " Goat", "Lion"];
// Use a for loop to print the name of each animal
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var animal = Animals_1[_i];
    console.log(animal);
} // Modify the for loop to print a statement about each animal
for (var _a = 0, Animals_2 = Animals; _a < Animals_2.length; _a++) {
    var animal = Animals_2[_a];
    console.log(" A ".concat(animal.toLowerCase(), " would make a great pet. "));
}
// Add a line at the end stating what these animals have in common
console.log("Any of these animals would make a great pet!");
