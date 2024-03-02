var currentusers = [" Admin", " Ali", " Nizakat Ali", " Aslam", " Kamran"];
var Newusers = [" Rahib", " Ahmed", " Salman", "Abdul Sattar", " Abdul Jabbar"];
var _loop_1 = function (Newuser) {
    // Check if the username already exists (case insensitive)
    var usernameExists = currentusers.some(function (user) { return user.toLowerCase() === Newuser.toLowerCase(); });
    // Print a message based on the result
    if (usernameExists) {
        console.log("Sorry, the username '".concat(Newuser, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(Newuser, "' is available."));
    }
};
// Loop through the new_users list to check for unique usernames
for (var _i = 0, Newusers_1 = Newusers; _i < Newusers_1.length; _i++) {
    var Newuser = Newusers_1[_i];
    _loop_1(Newuser);
}
