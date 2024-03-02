let favoritePizzas : string[] =["Pepperoni", "Margherita", "BBQ Chicken"];

// Use a for loop to print the name of each pizza
for (let pizza of favoritePizzas) {
    console.log (pizza);
}

// Modify the for loop to print a sentence for each pizza
for (let pizza of favoritePizzas) {
    console.log(` I like ${pizza} pizza`)
}
// Add a line outside the for loop to state how much you like pizza
console.log(` I really love pizza`)