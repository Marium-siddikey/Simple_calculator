#! /usr/bin/env node

import inquirer from "inquirer";

//printing a wellcome message
console.log("\n\tWellcome To \'MariumSiddikey\' - CLI simple Calculator\n");
// Asking questions from users through inquirer

let answers = await inquirer.prompt([
    {message: "enter first number", type: "number", name: "firstNumber"},
    {message: "enter second number", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

//conditional statements if-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("invalid input")
}



