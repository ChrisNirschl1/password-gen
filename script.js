// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//ToDo: Write the generatePassword function
//When prompted for length of password
//Then choose a legth of at least 8 chars and less than 128
//ToDo: ask user how may chars they want in password > use a prompt that will set a var>make sure information is correct> number> 8+ or 128- 
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//ToDo: write a series of 4 confirms > set these to be a var> to check if the user wants 
//ToDo: write 4 arrays one for lowercase, uppercase, special char and numbers
//ToDo: check that the prompt true or false > using above var for this > add associated arrays to a "holding array" upperConfirm > true > uppercase[] > add to holding []
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//ToDo: Check we have at least one of the types
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//ToDo: take our holding array and randomize the chars > adding to a second array
//ToDo: take the randomized chars and select the amount the user has chosen for the password length > add these to a return array > for loop the length for this will be the user password length
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//ToDo: take our return array and use array method to convert to a string > have a var for this and return string 