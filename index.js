/* Pseudocode
    1. create a variable for the user message
    2. create three seperate variables for each of the combination numbers, using the different math operations
    3. create an alert message concatenating the four variables created together.*/

// assigning the user message a variable
const vaultMsg = "You have received this message because yo have been chosen to open an important vault.  Here is the secret combination:";
// assigning three variables for the combination code using the math operations
let code1 = 2 * 5;

let code2 = (8 + 2) * 5 - 10;

let code3 = 100 / 4 + 14;

// creating an alert message to display in the browser
alert(vaultMsg + " " + code1 + "-" + code2 + "-" + code3);
