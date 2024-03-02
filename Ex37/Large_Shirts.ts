function make_shirt(size: string ="Large", message: string =" I love TypeScript" ) {
    console.log(`T-Shirt Size: ${size}, Message: ${message} `)
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small","JavaScript is Fun!");