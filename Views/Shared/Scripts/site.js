// Instantiate date object
var date = new Date();

// Assign event handler
window.onload = onPageLoad;

// On page load event
function onPageLoad(){
    
    // Plug in events
    var button = document.getElementById('guessBtn');
    
    if (button != null){
        
        button.addEventListener("click", checkWordOfTheDay);
    }
    
    getYear();
    getTime();
}

// Display the year in footer
function getYear(){
    
    var element = document.getElementById('getYear');
    
    if (element != null){
        
        element.innerHTML = date.getFullYear();
    }
}

// Display the time in footer
function getTime(){
    
    var element = document.getElementById('getLoadTime');
    
    if (element != null){
        
        element.innerHTML = date.getUTCHours() - (date.getTimezoneOffset() / 60) + ':' + date.getUTCMinutes();
    }
}

// Check user input for word of the day
function checkWordOfTheDay(){
    
    // The word of the day to be guessed by the user
    const wordOfDay = 'business';
    
    // Gets the value entered into the input box.
    var word = document.getElementById('guessInput').value;
    
    if (word != null){
    
        // Compare the inputted value against the Word of the day
        if (word === wordOfDay){
            
            // If the user guesses correctly, alert the user.
            alert("That is the correct word!");
        }
        else {   
            
            // If the user guesses incorrectly, alert the user.
            alert('Sorry try again.');
        }  
    }
};
