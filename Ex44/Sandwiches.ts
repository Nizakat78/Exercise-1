function order_sandwiches(...toppings: string[]):void {
    console.log("\nSandwiches Summary:");
    if(toppings.length===0){
        console.log("No toppings selected. It's a plain sandwich!")
    } else {
        console.log("Topping :" + toppings.join(", "))
    }
    console.log("Enjoy your sandwich!\n");
}

// Call the function three times with a different number of arguments each time
order_sandwiches("Ham","Cheese", "Lettuce");
order_sandwiches("Turkey","Tomato");
order_sandwiches();