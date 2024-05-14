/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

let magicians1:string[]=["asim","anas","ghulam"];

function show_magicians(magician1:string[]):void{
magicians1.forEach(magician1 =>
    console.log(magician1)
)
}

function make_great(magician1:string[]):void{
    for(let i = 0; i<magicians1.length;i++){
        magicians1[i] ="the great" + magician1[i];
    }
}
//call make_great () to modify the array of magicians
make_great(magicians1);

//call show_magicians() to see that the list has been modified
show_magicians(magicians1);