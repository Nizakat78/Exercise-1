let guestlist=["Nizakat Ali", "Irshad Ali","Ahmed Ali"];
console.log(`\n Guest List: \n`);

guestlist.forEach(Ahmed=> console.log(`Asslam-E-Alaikum ${Ahmed} I would like to invite to at dinner.`));

//guest can't came in dinner
let oneguestcanntcome= guestlist[1];
console.log(`\n ${oneguestcanntcome} Can't Come in Dinner.\n`);

// this is new guest come in Dinner

guestlist[1]= "Kmran Ali";
console.log(`\n Here is Update List of Guest \n`);
guestlist.forEach(Nizakat=> console.log(`Hello ${Nizakat}, Your are invited to Dinner.`));

// invite more people find a biggest Table.
console.log(`\n Good New! We are Finding a Biggest Table.\n`);

//add Newguest
guestlist.unshift("Haji Dur-e- Muhammad"); // At Start in List 
guestlist.splice(Math.floor(guestlist.length /2 ), 0,"Kalsoom"); // add in moddle friend in this guest List
guestlist.push("Asif"); //End of list guest Friend add.
console.log(`\n here is Newlist of Guestlist:\n`);
guestlist.forEach(Ahmed=> console.log(`Assalam-e-Alaikum ${Ahmed} I would like to invite the  friend in Dinner.`));

// only two invite for the Dinner

console.log(`\n Due to some Problem, We are Invite just only two people\n`);

// Remove guest untill only two remain

while (guestlist.length > 2) {
    const removeguestlist= guestlist.pop();
    console.log(`\nSorry ${removeguestlist} we can't invite to dinner.\n`);
}

// Remove the last two names from the list
guestlist=[];
// Print to ensure an empty list

console.log(`\n Emty Guestlist Final: \n`);
guestlist.forEach(Ahmed => console.log(`${guestlist} Empty Guestlist Final`));


// Print the number of people invited to dinner
console.log(`\n Number of People invited to dinner: ${guestlist.length} \n`);