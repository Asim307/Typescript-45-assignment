"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
//creat a variable
let alien_color = "green";
//now creat a passing condition
if (alien_color === "green") {
    console.log("congratulations! you just earn 5 points for shoot the green alien");
}
else {
    console.log("congratulations! you just earn 10 points for shoot the non-green alien ");
}
//creat failing condition
let alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("congratulations! you just earned 5 points for shoot green alien");
}
else {
    console.log("congratulation! you just earned 10 points for shoot non-green alien");
}
