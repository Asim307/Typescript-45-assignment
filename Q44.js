"use strict";
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
function ordersandwich(...items) {
    console.log("you ordered a sandwich with the following items:");
    items.forEach(item => console.log(" " + items));
    console.log("enjoy your sandwich!");
}
//call the function with different number of arguments each time
ordersandwich("bread", "tomato", "mayo");
ordersandwich("garlic", "tomato", "mayonaise", "onion");
ordersandwich("peanut butter", "jelly");
ordersandwich("bread");
