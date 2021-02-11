// Assignment Code
let generateBtn = document.querySelector("#generate");

// Assigned Variables 
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialChars = "!@,#$%&*{}[]/\\+=";
let userchoice = "";

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

