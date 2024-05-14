/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/


//first creat an object
let student_name:mytype={
name:"muhammad asim",
year:2024,
course:{IT:
["GENERATIVE AI",1]
}
}
console.log(student_name);
//then give its datatypes
type mytype={
    name:string;
    year:number;
    course:myinter;
};
interface myinter{
    IT:(string| number)[]
}