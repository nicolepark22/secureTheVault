/* Pseudocode
    1. create a variable for the user message
    2. create variable 1, giving it the value of 10 using math operation multiplication
    3. create variable 2, giving it the value of 40 using math operations addition/subtraction
    4. create variable 3, giving it the value of 39 using math operations division/addition
    5. create an alert message 
    6. In the alert message conctenate the four variables
    */

// assigning the user message a variable
const vaultMsg = "You have received this message because yo have been chosen to open an important vault.  Here is the secret combination:";
// assigning three variables for the combination code using the math operations
let code1 = 2 * 5;

let code2 = (8 + 2) * 5 - 10;

let code3 = 100 / 4 + 14;

// creating an alert message to display in the browser
// alert(vaultMsg + " " + code1 + "-" + code2 + "-" + code3);
alert(`${vaultMsg} ${code1}-${code2}-${code3}`);
