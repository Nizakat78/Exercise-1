var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitplace = ["Dubai", "London", "Paris", "Tokyo", "New york"];
// Original list  
console.log("\n original Order:");
console.log(visitplace);
// Alphabetic Arrange in In  original List
console.log(" \n Alphabetically arranged order in the original list :");
console.log(__spreadArray([], visitplace, true).sort());
//Show that your array is still in its original order by printing it.
console.log("\n Still in its Original order after alphabetic printing:");
console.log(visitplace);
// reverse alphabetical order without changing the order of the original list
console.log("\n reverse alphabetical order without changing the order of the original list:");
console.log(__spreadArray([], visitplace, true).sort().reverse());
// Show that the array is still in its original order
console.log("\n Array is still same Order:\n ");
console.log(visitplace);
// reverse order again to get back in same original 
visitplace.reverse();
console.log("\n Reverse order again");
console.log(visitplace);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
visitplace.reverse();
console.log("\n Back to original visitlist:");
console.log(visitplace);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
visitplace.sort();
console.log("\n Again in Alphabetic Order");
console.log(visitplace);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
visitplace.sort(function (a, b) { return b.localeCompare(a); });
console.log("\n Sorted revesre in Alphebtic Order: \n ");
console.log(visitplace);
