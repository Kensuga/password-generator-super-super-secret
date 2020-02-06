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
let lowArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//create array of uppercase letters
let capArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//create array of spcial characters
let specialChars= ["!","@","#","$","%","^","&","*"]
//Create array of numbers
// Math.floor(Math.random() * 10);
let numArray= ["1","2","3","4","5","6","7","8","9","0"]



// ask user if they want lower cased letters
let chooseLC = confirm("Do you want lower cased letters?");
//ask if they want upper cased letters
let chooseCAP = confirm("Do you want upper cased letters?");
// ask if they want special charactrers
let chooseSpec = confirm("Do you want special characters?");
// ask if they want numbers
let chooseNum = confirm("Do you want numbers?");
//Ask how many characters they want
let pLength = prompt("How long do you want your password to be?(Between 8-128 Characters)");
//Convert Prompt for length to a number
pLength = parseInt(pLength);
console.log(pLength);

//creating a NAN
let nanCheck = "string"
nanCheck = parseInt(nanCheck)
console.log(nanCheck);
//Verify they put in number and not string
if (typeof pLength === "number"){
    while (pLength < 8 || pLength > 128){
        alert("Your number was outside of parameters.")
        pLength = prompt("How long do you want your password to be?(Between 8-128 Characters)");
        pLength = parseInt(pLength);
    }
}
//If they typed letters, this has them try again
if (isNaN(pLength) === true) {
    while (isNaN(pLength) === true){
        alert("You did not enter a number. Please Try Again.")
        pLength = prompt("How long do you want your password to be?(Between 8-128 Characters)");
        pLength = parseInt(pLength);
    }
}
//Creates Blank Variable for our password
var randomPass = "";

//Starts a loop to go for the length of the password, generating a part of it every iteration
for(let i = 0; i < (pLength); i++) {
    //Chooses a random Array for a character
    whichArray = Math.round(Math.random()*3);
    //Verifies if the the person wanted lower case
    if (whichArray == 0 && chooseLC == true) {
        //Grabs Random Character from the array and assigns it to the password
        randomPass += lowArray[Math.round(Math.random()* (lowArray.length-1))];
    }
        //Verifies if the person wanted Upper Case
    else if (whichArray == 1 && chooseCAP == true) {
        //Grabs Random Character from the array and assigns it to the password
        randomPass += capArray[Math.round(Math.random()* (capArray.length-1))];
    }
        //Verifies if the Person wants Special Characters
    else if (whichArray == 2 && chooseSpec == true) {
        //Grabs Random Character from the array and assigns it to the password
        randomPass += specialChars[Math.round(Math.random()* (specialChars.length-1))];
    }
        //Verifies if the person wanted Numbers
    else if (whichArray == 3 && chooseNum == true) {
        //Grabs Random Character from the array and assigns it to the password
        randomPass += numArray[Math.round(Math.random()* (numArray.length-1))];
    }
        //If they decline everything, take them out of the loop.
    else if (chooseNum === false && chooseSpec === false && chooseCAP === false && chooseLC === false) {
        i = pLength;
    }
        //If it selects an unwanted array, -i so that way we keep the length of the password correct
    else {
        i--;
    }
}
//We have the random password. Give it to the button
return randomPass;
}
