function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = " I love TypeScript"; }
    console.log("T-Shirt Size: ".concat(size, ", Message: ").concat(message, " "));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small", "JavaScript is Fun!");
