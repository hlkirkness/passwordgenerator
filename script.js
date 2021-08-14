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

  console.log("length: " + length)

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

  console.log("lower?: " + includeLowercase)
  console.log("upper?: " + includeUppercase)
  console.log("numeric?: " + includeNumeric)
  console.log("special?: " + includeSpecial)

  var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase())
  var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"]
  var specialCharacters = ["!","@","#","$","%","^","&","*"]

  var selectedCharacters = []
  if (includeLowercase)
    selectedCharacters = selectedCharacters.concat(lowercaseLetters)
  if (includeUppercase)
    selectedCharacters = selectedCharacters.concat(uppercaseLetters)
  if (includeNumeric)
    selectedCharacters = selectedCharacters.concat(numberCharacters)
  if (includeSpecial)
    selectedCharacters = selectedCharacters.concat(specialCharacters)

  console.log(selectedCharacters)

  var password = ""
  for (let i = 0; i < length; i++) {
    console.log(i)
    password += selectedCharacters[Math.floor(Math.random() * (selectedCharacters.length - 1))]
  }
  console.log(password)
  return password
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
