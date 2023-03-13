// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector('#generate')
var output = document.querySelector('#password')
function showPassword(password) {
    output.innerText = password.join('');
}

function generatePassword(optionsObj) {
    var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n','o','p','q','r','s','t','u','v','w','x', 'y','z']
    var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N','O','P','Q','R','S','T','U','V','W','X', 'Y','Z']
    var numbers = [0,1,2,3,4,5,6,7,8,9]
    var specialChars = ['!','@','#','$','%','&','*']

    var criteriaChoices = []
    var criteriaList = []

    if (optionsObj.lowercase) {
        criteriaChoices = criteriaChoices.concat(lowercase)
    }
    if (optionsObj.uppercase) {
        criteriaChoices = criteriaChoices.concat(uppercase)
    }
    if (optionsObj.numbers) {
        criteriaChoices = criteriaChoices.concat(numbers)
    }
    if (optionsObj.specialChars) {
        criteriaChoices = criteriaChoices.concat(specialChars)
    }
    for (var i = 0; i < optionsObj.amount; i++) {
        var randomSelection = criteriaChoices[Math.floor(Math.random() *
        criteriaChoices.length)]
        
        criteriaList.push(randomSelection)
    }
    showPassword(criteriaList)
}


function getOptions() {
    var passwordNumberChars = prompt ('How many characters would you like? (i.e. 8 - 128)') 
    var parsedAmount = parseInt(passwordNumberChars)
    var wantsLowercase = confirm('Would you like to include lowercase letters?')
    var wantsUppercase = confirm('Would you like to include uppercase letters?')
    var wantsNumbers = confirm('Would you like to include numbers?')
    var wantsSpecialChars = confirm('Would you like to include special characters?')
    
    var options = {
        amount: parsedAmount,
        lowercase: wantsLowercase,
        uppercase: wantsUppercase,
        numbers: wantsNumbers,
        specialChars: wantsSpecialChars
    }
    generatePassword(options);
}
generateBtn.addEventListener('click', getOptions)
