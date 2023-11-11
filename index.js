var outputString = []; 
var upperCase = [];
var lowerCase = [];
var inputString = "";


//waits for the submit button to be clicked
//prevent default prevent the page reloading and deleting the string

formID.addEventListener('submit', e => {
      e.preventDefault();     
      //text.innerHTML = 'clicked';
      
    });   

// gets the string from the sentance input box
function stringFunc() {
 
  inputString = document.getElementById("sentance").value;
  // console.log(inputString);
  sToDollar(inputString);
  toUpperCase(inputString)
  
  //return inputString;
  }

//goes thought the string and makes every other letter CAPITAL
//it pushes these CAP and lower case letters to two arrays lowerCase and UpperCase
function toUpperCase (inputString) {
  
  //clears the output box
  document.getElementById("outputText").value = "";

  let caps = document.getElementById("caps"); 
  
  if (inputString == "") {
    console.log("no text entered, please enter some text"); 
    /* document.getElementById("outputText").innerHTML = emptyString.toString(); */
    alert("empty string, please write some text");
    }
  // if CAPS is not checked exit out of function and set the output text to the input text
  if (!caps.checked) { 
    document.getElementById("outputText").value = inputString;
    return
    // else: itterate through the output text string, push leters alternately to 2 arrays, a caps and lower case one.
    } else {
       
      document.getElementById("outputText").value = ""      
  for (i = 0; i < inputString.length; i++) {
    if (i % 2 == 0) {
    upperCase.push (inputString[i].toUpperCase());  
    } else { 
    lowerCase.push(inputString[i]);     
    }
  }

//takes the Uppercase and lowerCase arrays and pushes them in sequence to an array 'outputString'
for (index = 0; index < upperCase.length; index++) {
  outputString.push(upperCase[index]); 
  outputString.push(lowerCase[index]);
}

//takes the outputString and uses the .join method to combine them into a single sentance
var inputString = outputString.join(' '); 
console.log("here is the final string: " + inputString); 

//assigns the "outputText" section of the HTML the value of the final string. 
document.getElementById("outputText").value = inputString;
  
  }
}
toUpperCase(); 

//check the check boxes and change the input string accordingly
function sToDollar (inputString) { 
	
  let newString = inputString.replaceAll("s", "$")
  // .replaceAll("e", "€") 
  // .replaceAll("u", "ü")
  // .replaceAll("o", "ø")
  //.replaceAll("i", "!");                  
  
  inputString = newString;
  //assigns the "outputText" section of the HTML the value of the final string. 
  document.getElementById("outputText").value = inputString;
	console.log(inputString); 	
    
  //return newString
}


//NOTES:

//need to check if boxes are ticked. 

//if (box.checked) { run function, retun a value}




//	https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/