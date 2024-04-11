#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6 + 1);
const answers = await inquirer.prompt([
    { message: "Enter the number between 1-6", name:"UserGuessNumber", type:"number" },
]);

if (randomNumber === answers.UserGuessNumber) {
    console.log("Congratulations!\nBoth Numbers are same number in computer memory is " + randomNumber + " and number entered is " + answers.UserGuessNumber);
}
else
{
    console.log("You Guessed Wrong number number in computer memory is " + randomNumber + " and number entered is " + answers.UserGuessNumber);
}