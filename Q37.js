"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt2(size, message) {
    console.log(`you have orderd a ${size} sized shirt with the message :"${message}`);
}
//calling the function
make_shirt2("large", "i love typescript");
make_shirt2("medium", "i love typescript");
make_shirt2("small", "keep calm and code on!");
