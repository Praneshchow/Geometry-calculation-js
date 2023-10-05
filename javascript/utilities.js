/* 
--------- Utilities ----------
Three functions used for doing repetitive work:
1) getElement() = For taking input data from the input field when button selected. 
2) multiply() = Multiply the two input which is common every calculation and I also checked the input is valid or not. 
3) resultShow() = Result show into the box with list. 

*/

// Get the input value from the input field.  
function getElement(element) {
    const input = document.getElementById(element);        // select the input b.
    const inputFieldValueString = input.value;             // set the string input value. 
    const inputFieldValue = parseFloat(inputFieldValueString);     // convert into floating number. 

    return inputFieldValue;
}

// Multiply the common two inputs (height, width). 
function multiply(firstInput, secondInput) {
    const inputMultiply = firstInput * secondInput;    // multiply because it is common calculation in every geometry. 

    // check the valid input. 
    if ((isNaN(inputMultiply) == false && inputMultiply > -1 == true) || inputMultiply == '') {
        return inputMultiply;
    }
    else {
        alert('Input is invalid!');
        return getElement();
    }
}

// Result Show.  
function resultShow(geometryName, area) {
    const result = document.getElementById('result-list');       // select the element. 

    const li = document.createElement('li');                     // create a element or tag. 
    li.innerText = geometryName + " : " + area.toFixed(2) + " cm^2";     // add text and result into the tag. 
    result.appendChild(li);                                      // add the tag. 
}


 
