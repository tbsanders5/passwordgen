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
  let innerPass = '';
  

  let lengthPass = parseInt(prompt('How many characters would you like in your password? Must be between 8 and 128 characters.'));
    if (!lengthPass) {
      alert('Value is needed! Start over!')
      return(lengthPass);
    }

    while (lengthPass < 8 || lengthPass > 128) {
      lengthPass = parseInt(prompt('Password must be between 8 and 128, choose again!'));
    if (!lengthPass) {
      alert('Value is needed! Start over!')
      return(lengthPass);
    }
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
     if (confirmUpper) {
      userChoice.push(alphUp);
    }

      if(confirmLower) {
      userChoice.push(alphLow);  
    } 
      if(confirmSpec) {
        userChoice.push(specChar);
      }
      
      let userCombo = userChoice.flat()
      
      // 4 booleans
      // hasnumber,haslower etc
      let needToAddNumber = confirmNumbers;
      let needToAddLower = confirmLower;
      let needToAddSpecChar = confirmSpec;
      let needToAddUpper = confirmUpper;

      for (var i=0; i < lengthPass; i++) { 
        if (needToAddNumber) { innerPass += numbers[Math.floor(Math.random() * numbers.length)] 
        needToAddNumber = false;
      } else if (needToAddLower) { innerPass += alphLow[Math.floor(Math.random() * alphLow.length)] 
        needToAddLower = false;     
      } else if (needToAddSpecChar) { innerPass += specChar[Math.floor(Math.random() * specChar.length)]
        needToAddSpecChar = false;
      } else if (needToAddUpper) { innerPass += alphUp[Math.floor(Math.random() * alphUp.length)]
        needToAddUpper = false;
      } else {
        innerPass += userCombo[Math.floor(Math.random() * userCombo.length)]
        // console.log(innerPass);
      } 
      
    } 
        var finalPass = '';
        var innerPassLength = innerPass.length;

          for (var i=0; i < innerPassLength; i++) {
          var randomPos = Math.floor(Math.random() * innerPass.length)
          console.log(randomPos);
          finalPass += innerPass.charAt(randomPos);
          innerPass = innerPass.slice(0, randomPos) + innerPass.slice(randomPos + 1);
          console.log(innerPass);
        } 
          
      }
        { 
        return finalPass;
            } 
    } 

    function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
