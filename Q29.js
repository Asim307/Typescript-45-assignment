"use strict";
/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
let favorite_fruit = ["banana", "apple", "mango"];
if (favorite_fruit.includes("banana")) {
    console.log("you really like bananas?");
}
if (favorite_fruit.includes("apple")) {
    console.log("you really like apples?");
}
if (favorite_fruit.includes("mango")) {
    console.log("you really like mangos?");
}
if (favorite_fruit.includes("orange")) {
    console.log("you really like oranges?");
}
else {
    console.log("oranges are not in your list of favorite_fruits");
}
if (favorite_fruit.includes("kiwi")) {
    console.log("you really like kiwis?");
}
else {
    console.log("kiwis are not in your list of favorite_fruits");
}
