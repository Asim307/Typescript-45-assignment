"use strict";
/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function CityCountry(city, country) {
    return `${city}, ${country}`;
}
//calling the function with three city-country pairs
let city1 = CityCountry("karaci", "pakistan");
let city2 = CityCountry("istanbul", "turkey");
let city3 = CityCountry("paris", "france");
//printing the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);
