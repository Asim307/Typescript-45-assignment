"use strict";
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guestlist3 = ["anas", "mujtaba", "ghulam"];
let canNotCome = guestlist3[0];
//console.log(CanNot_Come + " " + "you are not invited to dinner");
let perSon2 = "uzair";
guestlist3[guestlist3.indexOf(canNotCome)] = perSon2;
guestlist3.forEach(name => {
    //console.log(`dear ${name} your are invited to dinner`);
});
guestlist3.forEach(name => {
    //console.log(`dear,${name} i found bigger dinner so i invited more guest`);
});
//begging guest
let name4 = "abdullah";
guestlist3.unshift(name4);
//middle guest
let name5 = "nadir";
let index1 = guestlist3.length / 2;
guestlist3.splice(index1, 0, name5);
//end guest
let name6 = "ahmed";
guestlist3.push(name6);
guestlist3.forEach(name => {
    //console.log(`dear,${name} you are invited for dinner`);
});
//print first line of exercise 17
console.log("i have space only two guests");
//remove guests 
console.log(guestlist3);
while (guestlist3.length > 2) {
    let removePerson = guestlist3.pop();
    //print message to those who cant invite
    console.log(`dear, ${removePerson} sorry, i cant invite you for dinner`);
}
// print a message who still invite
guestlist3.forEach(name => {
    console.log(`dear,${name} you are still invited to dinner!`);
});
//creat empty list and print it
guestlist3.pop();
guestlist3.pop();
console.log(guestlist3);
