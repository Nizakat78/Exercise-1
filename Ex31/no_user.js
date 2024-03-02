var usernames = [" Admin", " Ali", " Nizakat Ali", " Aslam", " Kamran"];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print a greeting to each user
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames, ", thank you for logging in again."));
        }
    }
}
else {
    // Print a message if the list is empty
    console.log("We need to find some users!");
}
// Remove all usernames from the array
usernames = [];
// Check again if the list is not empty
if (usernames.length > 0) {
    console.log("The list is not empty.");
}
else {
    console.log("The list is empty.");
}
