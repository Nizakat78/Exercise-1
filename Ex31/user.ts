// Make an array of usernames
let usernames : string[] =["Admin", " Ahmed", " Ali", " Kamran"," Sara"];

for(let username of usernames) {
    if(username==="Admin"){
    console.log("Hello admin, would you like to see a status report?");
}
else{
    console.log(`Hello${username}, Thanks for logging again`); 

}}