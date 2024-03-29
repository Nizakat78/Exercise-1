// Define the function make_album with optional tracks parameter
function make_album(artist : string, title : string, tracks? : number):{artist : string, title:string, tracks?:number} {
    let album :{artist : string, title : string, tracks? :number}={
        artist:artist,
        title:title
    };
     // Add tracks to the album if provided
     if (tracks !== undefined) {
        album.tracks = tracks;
     }
     return album;
}


// Make three dictionaries representing different albums
let album1=make_album("Name : Ahmed", " Name : Happy");
let album2=make_album("Name : kamran"," Name : Udas",12 ); // Including the number of tracks
let album3= make_album("Name :Pervaiz"," Name : King");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);