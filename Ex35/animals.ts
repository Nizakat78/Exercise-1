// Array of animals with a common characteristic
let Animals : string[] =[" Dog", " Cat" ," Goat" ,"Lion"];

// Use a for loop to print the name of each animal
for (let animal of Animals) {
    console.log(animal);
}// Modify the for loop to print a statement about each animal

 for (let animal of Animals) {
    console.log(` A ${animal.toLowerCase()} would make a great pet. `)
 }
// Add a line at the end stating what these animals have in common
console.log(`Any of these animals would make a great pet!`);