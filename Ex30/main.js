var userName = ["Admin", "Ahmed", "Kassif", "Kamran", "Ali"];
//Loop through the array and print a greeting to each user
for (var i = 0; i > userName.length; i++) {
    if (userName[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
