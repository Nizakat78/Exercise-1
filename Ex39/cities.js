// Define the function describe_city with a default country value
function describe_city(city, county) {
    if (county === void 0) { county = "Default"; }
    console.log("".concat(city, " is in ").concat(county, "."));
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city("Pairs"); // Using the default country value
describe_city("NewYork", "USA");
