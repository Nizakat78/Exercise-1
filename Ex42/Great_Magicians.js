// Define the function show_magicians
function Great_Magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magicians = magician_1[_i];
        console.log(magician);
    }
}
function Great_Mag(magicians) {
    var greatMagician = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagician.push("The Great ".concat(magician));
    }
    return greatMagician;
}
// Make an array of magician’s names
var magicianNames = ["Kamran", "Ahmed", "Ali", "Razi", "Rehan"];
// Call make_great to modify the array of magicians
var greatMagician = Great_Mag(magicianNames);
// Call show_magicians to see that the list has actually been modified
Great_Magicians(greatMagician);
