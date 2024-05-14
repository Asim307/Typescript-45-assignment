/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicians :string[]=["asim","anas","ghulam"];
function show_magicians1(magicians:string[]):void{
    magicians.forEach(magician =>
        console.log(magician)
    )
}

//cal the function to show the magician
show_magicians1(magicians);