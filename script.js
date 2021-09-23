// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCase = ["a","b","c","d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s", "t","u","v","w","x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@", "#", "$", "%"]
var lengthSelect;
var userNumbers;
var userSpec;
var userLower;
var userUpper;
var password= "123456";
var possChars = []


// Write password to the #password input
function writePassword() {
  console.log ("12345");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
userLength();

}

function userLength() {
  lengthSelect = prompt("How many characters do you want in the password between 8 and 128?");
  if (lengthSelect > 128 || lengthSelect < 8) {
    alert("Choose character length between 8 and 128");
    userLength();
  }
  else {
    userInputs();
  }
}


function userInputs() {
  userNumbers = confirm("Do you want numbers in your password");
  userSpec = confirm("Do you want special characters in your password?");
  userLower = confirm("Do you want lower case letters in your password?");
  userUpper = confirm("Do you want upper case letters in your password?");
  if (!userNumbers && !userSpec && !userLower && !userUpper) {
    alert("Choose at least one option");
    userInputs()
  } else {
if (userNumbers == true){
  console.log("numbers");
  possChars.concat(numbers);
}
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




















// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//ToDo: Write the generatePassword function
//When prompted for length of password xxx
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



