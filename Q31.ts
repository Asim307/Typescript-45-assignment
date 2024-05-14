/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let friends_name1:string[]=["Asim","Anas","ghulam","mujtaba"];

//check if the list of users is not empty
if(friends_name1.length >0){
    for (let user of friends_name1){
        console.log("user: " + user);
    }
}else {
    console.log("we need to find some users!");
}

//remove all user names from the array
let nullname :string[]=[];

// check if the list of users is not empty after removel
if(nullname.length > 0){
    for(let user of nullname){
        console.log("user :" + user);
    }
}else{
    console.log("we need to find some users!");
}