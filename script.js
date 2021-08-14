// Assignment code here
function generatePassword() {
  var length
  function promptForLength() {
    length = parseInt(prompt("Enter a password length between 8 and 128: "))
  }

  promptForLength()

  while (length < 8 || length > 128 || isNaN(length)) {
    alert("You need to enter a number between 8 and 128!")
    promptForLength()
  }

  var includeLowercase
  var includeUppercase
  var includeNumeric
  var includeSpecial
  function promptForCharacterTypes() {
    includeLowercase = confirm("Do you want your password to include lowercase letters?")
    includeUppercase = confirm("Do you want your password to include uppercase letters?")
    includeNumeric = confirm("Do you want your password to include numbers?")
    includeSpecial = confirm("Do you want your password to include special characters?")
  }

  promptForCharacterTypes()

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You need to select at least one character type to generate a password with!")
    promptForCharacterTypes()
  }

  return "Soon(tm)"
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
