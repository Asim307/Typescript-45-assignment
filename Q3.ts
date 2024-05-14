// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string="asim";
console.log("lowercase: " + personName.toLowerCase());
console.log("uppercase: " + personName.toUpperCase());
let titlecase= personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("titlecase: " + titlecase);