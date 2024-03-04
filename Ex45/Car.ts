// Define the function store_car_info
function store_car_info(manufacturer : string,  model : string, ...options: {[key: string]:any}[]):{manufacturer: string, model : string, options:{[key : string]:any} }{
    let carInfo:{manufacturer : string, model: string, options: {[key: string]:any }}={
        manufacturer:  manufacturer, 
        model:model, 
        options:{}
    };
        for(let option of options){
            for (let key in option)
            carInfo.options[key]=option[key];
        }
        return carInfo;
}
// Call the function with required information and additional name-value pairs
let carInfo=store_car_info("Toyota", "Camry");

console.log(carInfo);
