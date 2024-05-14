/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite */

let guestlist1 :string[]=["anas","mujtaba","ghulam"];

let CanNotCome:string= guestlist1[0];
console.log(CanNotCome + " " + "you are not invited to dinner");

let person:string="uzair";

guestlist1[guestlist1.indexOf(CanNotCome)]=person

guestlist1.forEach(person =>{
console.log(`dear ${person} your are invited to dinner`);
});