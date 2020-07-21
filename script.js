// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphLow = 'abcdefghijklmnopqrstuvwxyz';
const alphUp = alphLow.toUpperCase('');
const numbers = '0123456789';
const specChar = '!@#$%^&*';
const alphLowAr = alphLow.split('');
const alphUpAr = alphUp.split('');
const numAr = numbers.split('');
const specCharAr = specChar.split('');

console.log(specChar);
console.log(numbers);
console.log(alphLow);
console.log(alphUp);
// Write password to the #password input
function writePassword() {

  console.log("Running Generate Password")

  let lengthPass = parseInt(prompt('How many characters would you like in your password? Must be between 8 and 128 characters.'));
    while (lengthPass < 8 || lengthPass > 128) {
      lengthPass = prompt('Password must be between 8 and 128, choose again!');
    } if  (lengthPass = confirm('Will this contain numbers?') )

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
