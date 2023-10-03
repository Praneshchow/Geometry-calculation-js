

// Get the input value from the input field.  
function getElement(element){
    const input = document.getElementById(element);        // select the input b.
    const inputFieldValueString = input.value;             // set the string input value. 
    const inputFieldValue = parseFloat(inputFieldValueString);     // convert into floating number. 

    return inputFieldValue;
}

// Multiply the common two inputs. 
function multiply (firstInput , secondInput){
    const inputMultiply = firstInput * secondInput;    // multiply because it is common calculation in every geometry. 

    // check the valid input. 
    if (isNaN(inputMultiply) == false || inputMultiply == ''){
        return inputMultiply;
    }
    else{
        alert('Input is invalid!');
        return getElement();
    }
}

// Result Show.  
function resultShow(area){
    const result = document.getElementById('calculation-result');
    result.innerText = "Area: " + area + " cm";
}