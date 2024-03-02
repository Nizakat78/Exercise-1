let userName : string[] =["Admin", "Ahmed", "Kassif", "Kamran", "Ali" ]

//Loop through the array and print a greeting to each user
for(let i =0; i>userName.length; i++){
    if(userName[i]==="Admin"){
    console.log("Hello admin, would you like to see a status report?")
 }else {
    console.log(`Hello ${userName[i]}, thank you for logging in again.`)
 }
}
