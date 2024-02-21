let PersonName: string ="Nizakat Ali";

console.log(PersonName);

let lowercaseName : string  = PersonName.toLowerCase();

console.log(lowercaseName);

let UpperCaseName : string = PersonName.toLocaleUpperCase();

console.log(UpperCaseName);

let titlecase : string= PersonName.charAt(0).toUpperCase() + lowercaseName.slice(1) ;

console.log(titlecase);



