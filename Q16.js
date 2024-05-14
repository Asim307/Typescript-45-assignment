"use strict";
/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
//copy exercise 15
let guestlist2 = ["anas", "mujtaba", "ghulam"];
let CanNot_Come = guestlist2[0];
//console.log(CanNot_Come + " " + "you are not invited to dinner");
let perSon = "uzair";
guestlist2[guestlist2.indexOf(CanNot_Come)] = perSon;
/*guestlist2.forEach(perSon =>{
console.log(`dear ${perSon} your are invited to dinner`);
}); */
guestlist2.forEach(name => {
    console.log(`dear,${name} i found bigger dinner so i invited more guest`);
});
//begging guest
let name1 = "abdullah";
guestlist2.unshift(name1);
//middle guest
let name2 = "nadir";
let index = guestlist2.length / 2;
guestlist2.splice(index, 0, name2);
//end guest
let name3 = "ahmed";
guestlist2.push(name3);
guestlist2.forEach(name => {
    console.log(`dear,${name} you are invited for dinner`);
});
