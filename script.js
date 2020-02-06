// Assignment Code
var generateBtn = document.querySelector("#generate");
//generatPassword function
var passwordLength = 0;
// var lowerCase = confirm()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const generatePassword = () =>{
//create array of lowercase letters
var lowArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//create array of uppercase letters
var capArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//create array of spcial characters
var specialChars= ["!","@","#","$","%","^","&","*"]
//Create array of numbers
// Math.floor(Math.random() * 10);
var numArray= ["1","2","3","4","5","6","7","8","9","0"]

var newArray = [];

//Ask how many characters they want
var pLength = promt("How long do you want your password to be?");

// ask user if they want lower cased letters
var chooseLC = confirm("Do you want lower cased letters?");
    //validate
if (chooseLC == true){
    newArray.push(lowArray);
}

//ask if they want upper cased letters
var chooseCAP = confirm("Do you want upper cased letters?");
    //validate
if (chooseCAP == true){
    newArray.push(capArray);
}
// ask if they want special charactrers
var chooseSpec = confirm("Do you want special characters?");
    //validate
if (chooseSpec == true){
    newArray.push(specialChars);
}
// ask if they want numbers
var chooseNum = confirm("Do you want numbers?");
    //validate
if (chooseNum == true){
    newArray.push(numArray);
}

//Convert Prompt for length to a number
pLength = parseInt(pLength);

//Verify they put in number and not string
if (typeof pLength === "number") {
} else {
    alert("You did not enter a number.");
}

for(let i = 0; i < (pLength-1); i++) {
        j = Math.floor(Math.random() * newArray.length - 1);
    }
}

return randomPass.join("");
}
//randomize newArray

//Generate password based on criteria
//take all of letters & characters & add them together randomly
