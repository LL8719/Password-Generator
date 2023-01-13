// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

function generatePassword(length, userChoice) {
	var length = prompt(
		'How long do you want your password to be? 8-128characters'
	);
	var symbolEntry = confirm('Do you want to use symbols?');
	var upperEntry = confirm('Do you want to use uppercase letters?');
	var lowerEntry = confirm('Do you want to use lowercase letters?');
	var numEntry = confirm('Do you want to use numbers?');

	var userChoice = '';

	var charSeq = {
		lowercase: 'abcdefghijklmnop',
		uppercase: 'ABCDEFGHIJKLMNOP',
		numbers: '0123456789',
		symbols: '!@#$%^&*()-_=+',
	};
	if (symbolEntry) {
		userChoice += charSeq.symbols;
		// console.log(userChoice);
	}
	if (upperEntry) {
		userChoice += charSeq.uppercase;
		// console.log(userChoice);
	}
	if (lowerEntry) {
		userChoice += charSeq.lowercase;
		// console.log(userChoice);
	}
	if (numEntry) {
		userChoice += charSeq.numbers;
		// console.log(userChoice);
	}

	var passReturn = '';
	for (var i = 0; i < length; i++) {
		passReturn += userChoice.charAt(
			Math.floor(Math.random() * userChoice.length)
		);
	}

	return passReturn;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
