
// console.log();

// Get the input value from the input field.  
function getElement(element){
    const input = document.getElementById(element);        // select the input b.
    const inputFieldValueString = input.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    return inputFieldValue;
}

// Multiply the common two inputs. 
function multiply (firstInput , secondInput){
    const inputMultiply = firstInput * secondInput;
    console.log("Two input values: ", firstInput, secondInput);

    return inputMultiply;
}


// Calculation of the Triangle. 
document.getElementById('triangle').addEventListener('click', function(){
    const b = getElement('b-triangle');
    const h = getElement('h-triangle');

    const inputMultiply = multiply(b, h);

    const area = 0.5 * inputMultiply;
    console.log(area);

    const result = document.getElementById('calculation-result');
    result.innerText = "Area: " + area + " cm";
});



