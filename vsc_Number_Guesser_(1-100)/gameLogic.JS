    let numIn = document.getElementById('num_Input');
    let numOut = document.getElementById('num_Output').innerHTML;

    const num_Guesses = document.getElementById('num_Guesses');


    let guessCount='-1';
    
function loadRandomNumber(){

    min = Math.ceil(1); // Ensure min is an integer
    max = Math.floor(100); // Ensure max is an integer
    // The formula for an inclusive range [min, max]
    return rNI = (Math.floor(Math.random() * (max - min + 1)) + min);
    
    // now just set the "loadRandomNumber function" to be use by the "guessTheNumber function"
    
}


// console.log(loadRandomNumber());

// The "listItem" will be in "function guessTheNumber()" at the bottom


function guessTheNumber(){
    
    
    let guessNumber = parseFloat(numIn.value);
    
    
    // Input Validation (required)
    // Before checking the guess, validate that:
    // If invalid, show a clear message and do not count it as a guess.
    let errorDis = document.getElementById('error_message');
    
    if (isNaN(guessNumber)){
            errorDis.textContent = 'Please enter a valid number for your guess.';// Checks if the input is a number
    }

    if (guessNumber >= 101 || guessNumber <= 0){
            errorDis.textContent = 'Please enter a number that is between 1 and 100 for your guess.'; // Checks if the number is between 1 and 100
    }
    // The input is not blank
    
    

    guessCount++;
    const listItem = document.createTextNode("") && document.createElement('ol');


    // see if the number guessed is equal to the Random Number
        // Correct
    if (numIn.value == rNI){
        // numOut.textContent = 'Correct ';
        document.getElementById('num_Output').innerHTML = 'Correct ';
        // listItem.classList.add('correct');
    }
        // Incorrect
    else if(numIn.value > rNI){
        document.getElementById('num_Output').innerHTML = 'too high ';
        // listItem.classList.add('tooHi');
    }
    else if(numIn.value < rNI){
        document.getElementById('num_Output').innerHTML = 'too low ';
        // listItem.classList.add('tooLow');
    }
    
    listItem.textContent = `Guess ${guessCount}: #${guessNumber} is ${document.getElementById('num_Output').innerHTML}`;
    num_Guesses.appendChild(listItem);

}



function resetRandomNumber(){
    document.getElementById('num_Input').value = '0';
    guessCount='0';
  
    while (num_Guesses.firstChild){
        num_Guesses.removeChild(num_Guesses.firstChild);
    }
    loadRandomNumber();
    
}

guessTheNumber();