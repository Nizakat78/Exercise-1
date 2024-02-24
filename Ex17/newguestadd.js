var guestlist = ["Ali", "Aslam", "Danish", "Dadi"];
guestlist.forEach(function (Dadi) { return console.log("Hello ".concat(Dadi, " I would like to Invite for dinner")); });
var oneguestcanntcome = guestlist[1];
console.log("\n".concat(oneguestcanntcome, " can't come in dinner. \n"));
console.log("\nHere Update the list's of guest\n");
guestlist[1] = "Asghar";
guestlist.forEach(function (Height) { return console.log("Hello ".concat(Height, " I would like to invite for dinner")); });
console.log("\nGood News! We are found a Bigger table for dinner.\n");
guestlist.unshift("Mohammad");
guestlist.push("Sara");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "javed");
console.log("\nHere is new all invition of Members\n");
guestlist.forEach(function (number) { return console.log("Salam ".concat(number, " I would like to invite for Dinner.")); });
console.log("\nDue to unforeseen circumstances, we can only invite two people for dinner.\n");
while (guestlist.length > 2) {
    var removeguestlist = guestlist.pop();
    console.log("Sorry, ".concat(removeguestlist, "  Can not Come For Dinner"));
}
console.log("\n Final guestlist Here\n");
guestlist.forEach(function (Happy) { return console.log("Hello ".concat(guestlist, " You are still inviting for dinner.")); });
