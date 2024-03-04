// Define the function show_magicians
function Great_Magicians (magician : string[]): void {
    for(let magicians of magician) {
        console.log(magician)
    }
}
function Great_Mag (magicians :string[]): string[]{
let greatMagician : string[]=[];
for (let magician of magicians){
    greatMagician.push(`The Great ${magician}`)
}
return greatMagician;
}
// Make an array of magician’s names
let magicianNames : string[]=["Kamran","Ahmed","Ali","Razi", "Rehan"]
// Call make_great to modify the array of magicians
let greatMagician = Great_Mag(magicianNames);
// Call show_magicians to see that the list has actually been modified

Great_Magicians(greatMagician);