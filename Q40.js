"use strict";
/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */
function myalbum(artistName, Albumtitle) {
    return { artistName, Albumtitle };
}
let album1 = myalbum("atif aslam", "baarishain");
let album2 = myalbum("asim azhar", "jo tu na mila mujhe");
let album3 = myalbum("kaifi khalil", "mujhe piyar hua tha");
console.log(album1);
console.log(album2);
console.log(album3);
//number of tracks
function myalbum2(artistName, Albumtitle, numberoftracks) {
    return { artistName, Albumtitle, numberoftracks };
}
let album4 = myalbum2("asim", "dil diya gallan");
let album5 = myalbum2("ali", "fitoor");
let album6 = myalbum2("mehmod j", "eid aane wali hai");
console.log(album4);
console.log(album5);
console.log(album6);
