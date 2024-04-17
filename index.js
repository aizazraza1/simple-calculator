#! /user/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        massage: "Enter first number", type: "number", name: "firstNumber"
    },
    {
        massage: "Enter first number", type: "number", name: "secondNumber"
    },
    {
        massage: "Select one of the operator to perform action",
        type: "list",
        name: "oprator",
        choices: ["Addition", "Subtraction", " Multiplication", " Division"],
    },
]);
// cinditional statement
if (answer.oprator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oprator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oprator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oprator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid oprator");
}
