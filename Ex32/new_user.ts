let currentusers : string[] =[" Admin", " Ali", " Nizakat Ali", " Aslam", " Kamran"]

let Newusers : string[]  =[" Rahib", " Ahmed", " Salman", "Abdul Sattar", " Abdul Jabbar" ]

 // Loop through the new_users list to check for unique usernames
for(let Newuser of Newusers) {
    // Check if the username already exists (case insensitive)
    let usernameExists = currentusers.some(user => user.toLowerCase() === Newuser.toLowerCase());
    // Print a message based on the result
    if(usernameExists){
        console.log(`Sorry, the username '${Newuser}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${Newuser}' is available.`);
    }
}