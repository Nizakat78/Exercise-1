var PersonName = "Nizakat Ali";
console.log(PersonName);
var lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
var UpperCaseName = PersonName.toLocaleUpperCase();
console.log(UpperCaseName);
var titlecase = PersonName.charAt(0).toUpperCase() + lowercaseName.slice(1);
console.log(titlecase);
