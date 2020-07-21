// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphLow = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');
const specChar = '!@#$%^&*'.split('');


console.log(specChar);
console.log(numbers);
console.log(alphLow);
console.log(alphUp);




// Write password to the #password input
function generatePassword(){

  console.log("Running Generate Password")

  let lengthPass = parseInt(prompt('How many characters would you like in your password? Must be between 8 and 128 characters.'));
    while (lengthPass < 8 || lengthPass > 128) {
      lengthPass = prompt('Password must be between 8 and 128, choose again!');
    } 

    const confirmNumbers = confirm('Will this password contain numbers?');
    const confirmUpper = confirm('Will this password contain upper case letters?');
    const confirmLower = confirm('Will this password contain lower case letters?');
    const confirmSpec = confirm('Will this password contain special characters?')

    const userChoice = [];

    if (!confirmNumbers && !confirmUpper && !confirmLower && !confirmSpec) {
      userChoice = alert('Password needs a certain criteria, please start again!')
      return [lengthPass];
    } else {
      if (confirmNumbers) {
        userChoice.push(numbers);
      }
    } if (confirmUpper) {
      userChoice.push(alphUp);
    }

      if(confirmLower) {
      userChoice.push(alphLow);  
    } 
      if(confirmSpec) {
        userChoice.push(specChar);
      }
      let userCombo = userChoice.flat()

      for (var i=0; i < lengthPass; i++) {
        password = password + 
        userCombo[Math.floor(Math.random() * userCombo.length)]
      }
        return password;

    } 
      console.log(password);

    function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
