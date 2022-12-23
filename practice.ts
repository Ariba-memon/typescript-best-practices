// let name: string = "memon"
// console.log(name)

// let myname: string | boolean;
// myname = true;
// console.log(myname)

// let a: string = "Saudia"
// a = "memon"
// console.log(a)

import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    names: "ayesha",
    type: "names",
    message: "Enter Your Name"
}])

// if (answers.names === "ayesha") {
//     console.log("Hurry you are spider")
// }
// else {
//     console.log("i am not ayesha")
// }

let imran: (name: string) => string
imran = (name) => `Hello ${name.toUpperCase()}`
console.log(imran)