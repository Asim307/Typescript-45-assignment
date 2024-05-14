"use strict";
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//creat two variable
let string1 = "asim";
let string2 = "shaikh";
// tests for equally and inequally with strings
console.log("is string1 equal to 'asim'? i predict true");
console.log(string1 === "asim");
console.log("is string1 is not equal to string2? i predict true");
console.log(string1 !== string2);
//numerical test
//creat two more variable
let num_1 = 10;
let num_2 = 20;
console.log("is num_1 equal to 10? i predict true");
console.log(num_1 === 10);
console.log("is num_1 equal to num_2? i predict true");
console.log(num_1 === num_2);
console.log("is num_1 is less than num_2? i predict true");
console.log(num_1 < num_2);
console.log("is num_1 is greater than num_2? i predict true");
console.log(num_1 > num_2);
console.log("is num_2 is less than or equal to 20? i predict true");
console.log(num_2 <= 20);
console.log("is num1 is greater than or equal 20? i predict true");
console.log(num_1 >= 20);
//test using "and" and "or" operators
//creat another two variable
let bool1 = true;
let bool2 = false;
console.log("is bool1 true and bool2 false?i predict false");
console.log(bool1 && bool2);
console.log("is bool1 true or bool2 false? i predict true");
console.log(bool1 || bool2);
//test when an item is in an array
//creat an array
let array = [1, 2, 3, 4, 5];
console.log("is 3 in the array? i predict true");
console.log(array.includes(3));
//test when an item is not in an array
console.log("is 8 not in the array? i predict false");
console.log(array.includes(8));
