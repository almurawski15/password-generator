// Assignment Code
let generateBtn = document.querySelector("#generate");

// Assigned Variables 
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialChars = "!@,#$%&*{}[]/\\+=";
let userChoice = "";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Logic to randomly generate password based on parameters chosen
function generatePassword() {

//Initiating random generation to produce password in the end result 
let result = "";

//Asks the user how many characters to include in their password 
let length = prompt("How many characters would you like to include in your password? (must be between 8 and 128)");
	if(isNaN(length)){
	  alert("You must input a number!");
	  return generatePassword()
	}
	if(length<8 || length> 128){
	  alert("Please choose a number between 8 - 128!");
	  return generatePassword()
	}	

//Asks the user if they want to include the following variables upperLetters, lowerLetters, numbers, and special character?
let wantLowercase = confirm("Would you like to include lowercase letters?");
let wantUppercase = confirm("Would you like to include uppercase letters?");
let wantNumbers = confirm("Would you like to include numbers?");
let wantSpecial = confirm("Would you like to include special characters?");

if(!wantLowercase&&!wantUppercase&&!wantNumbers&&!wantSpecial){
	alert("You must choose at least 1 character type!");
	return generatePassword()
  }

  if(wantUppercase){
	userChoice += upperLetters
  }
  
  if(wantLowercase){
	userChoice += lowerLetters
  }

  if(wantNumbers) {
	userChoice += numbers
  }

  if(wantSpecial) {
	userChoice += specialChars
  }

for (var i = 0; i < length; i++) {
  result += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
}
return result;

}