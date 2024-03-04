// Define the function store_car_info
function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option)
            carInfo.options[key] = option[key];
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
var carInfo = store_car_info("Toyota", "Camry");
console.log(carInfo);
