/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner */

let guestlist4 :string[]=["anas","mujtaba","ghulam"]

let CanNotCome2:string= guestlist4[0];
//console.log(CanNotCome2 + " " + "you are not invited to dinner");

let perSon3:string="uzair";

guestlist4[guestlist4.indexOf(CanNotCome2)]=perSon3

/*guestlist4.forEach(perSon =>{
console.log(`dear ${perSon} your are invited to dinner`);
}); */

guestlist4.forEach( name => {
//console.log(`dear,${name} i found bigger dinner so i invited more guest`);
});

//begging guest

let name7:string="abdullah"
guestlist4.unshift(name7)

//middle guest
let name8 :string="nadir"
let index2 =guestlist4.length/2;
guestlist4.splice(index2,0,name8);

//end guest

let name9:string="ahmed"
guestlist4.push(name9);

guestlist4.forEach(name=> {
//console.log(`dear,${name} you are invited for dinner`);
});
console.log(guestlist4.length+" " + " " + "persons are invited for dinner");