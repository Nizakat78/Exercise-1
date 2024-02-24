let guestlist = ["Ali", "Aslam", "Danish", "Dadi"];
guestlist.forEach(Dadi=> console.log(`Hello ${Dadi} I would like to Invite for dinner`));

let oneguestcanntcome =  guestlist[1];
 console.log(`${oneguestcanntcome} can't come in dinner`);


 console.log("\nHere Update the list's of guest\n");

guestlist[1]= "Asghar";

guestlist.forEach(Height=> console.log(`Hello ${Height} I would like to invite for dinner`));

console.log("\nGood News! We are found a Bigger table for dinner.\n");


guestlist.unshift("Mohammad");
guestlist.push("Sara");

let middleindex : number  = Math.floor(guestlist.length/2);
guestlist.splice(middleindex, 0 ,"javed");

console.log("\nHere is new all invition of Members\n");

guestlist.forEach(number=> console.log(`Salam ${number} I would like to invite for Dinner.`));


