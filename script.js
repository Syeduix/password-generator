// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var finalCharactersPool = [];

// Function for getting a random element from an array
function getRandom(arr, length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    password += arr[Math.floor(Math.random() * arr.length)];
  }

  return password;
}

// Function to generate password with user input
function generatePassword() {
  // Prompt user for password length
  var length = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters):")
  );

  // Validate the user's input for password length
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(
      prompt(
        "Invalid input. Please enter a number between 8 and 128 for the password length:"
      )
    );
  }

  // Prompt user for including lowercase characters
  var includeLowercase = confirm(
    "Include lowercase characters? Click OK for yes, Cancel for no."
  );

  // Prompt user for including uppercase characters
  var includeUppercase = confirm(
    "Include uppercase characters? Click OK for yes, Cancel for no."
  );

  // Prompt user for including numeric characters
  var includeNumbers = confirm(
    "Include numeric characters? Click OK for yes, Cancel for no."
  );

  // Prompt user for including special characters
  var includeSpecialCharacters = confirm(
    "Include special characters? Click OK for yes, Cancel for no."
  );

  if (includeLowercase) {
    finalCharactersPool.push(...lowerCasedCharacters);
  }
  if (includeUppercase) {
    finalCharactersPool.push(...upperCasedCharacters);
  }
  if (includeNumbers) {
    finalCharactersPool.push(...numericCharacters);
  }
  if (includeSpecialCharacters) {
    finalCharactersPool.push(...specialCharacters);
  }

  var finalPassword = getRandom(finalCharactersPool, length);

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
