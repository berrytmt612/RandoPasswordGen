// variable character types
var upperCaseChar = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var numChars = "0123456789";
var specialChars = "~!@#$%^&*'`?()_-=+,/[]{|}<>:;";


var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
 
  var password = "";

  var passLength = window.prompt("How many characters would you like your password to be? (Choose between 8-128 character length).");
  if (passLength === null) {
    return;
  }
  
  
  while (isNaN(passLength)) {
    passLength = window.prompt("Please choose a password length of 8 - 128 characters.");
  }

  
  passLength = parseInt(passLength, 10); 


  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = window.prompt("Length MUST be 8 - 128 characters. How many characters do you wish your password to be?")
  }

  
  if (passLength >= 8 && passLength <= 128) {
    var upperCase = window.confirm("Do you wish to include CAPITAL letters?");
    var lowerCase = window.confirm("Do you wish to include LOWER CASE letters?");
    var availNums = window.confirm("Do you wish to include NUMBER characters?");
    var availSpecs = window.confirm("Do you wish to include SPECIAL characters?");
    
    
    while (!upperCase && !lowerCase && !availNums && !availSpecs) {
      
      window.confirm("ALERT: You must choose at least one character type to continue.");
      upperCase = window.confirm("Do you wish to include CAPITAL letters?");
      lowerCase = window.confirm("Do you wish to include LOWER CASE letters?");
      availNums = window.confirm("Do you wish to include NUMBER characters?");
      availSpecs = window.confirm("Do you wish to include SPECIAL characters?");
    }

    
    var createPassword = '';

    if (upperCase) {
      createPassword += upperCaseChar; 
    }

    if (lowerCase) {
      createPassword += lowerCaseChar; 
    }

    if (availNums) {
      createPassword += numChars; 
    }

    if (availSpecs) {
      createPassword += specialChars; 
    }

    for (i = 0; i < passLength; i++) {
      password += createPassword[Math.floor(Math.random() * createPassword.length)];
    }
    
  } else {
    window.alert("Please enter 8 - 128 for character length.");
    generatePassword();
  }

  return password;
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);