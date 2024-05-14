"use strict";
/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function showmagicians4(magicians4) {
    magicians4.forEach(magician => console.log(magician));
}
function make_great2(magicians4) {
    return magicians4.map(magician => "the great " + magician);
}
// define an array of magicians names
let magicians4 = ["asim", "anas", "ghulam"];
let great_magicians5 = make_great2([...magicians4]); //creating a copy using operator
//call show_magician4() to show the original array of magicians name
console.log("original magicians:");
showmagicians4(magicians4);
//call show_magician4() to show the array with "the great" added to each magicians name
console.log("/ngreat magicians");
