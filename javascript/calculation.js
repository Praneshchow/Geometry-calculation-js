
// Calculation of the Triangle. 
document.getElementById('triangle').addEventListener('click', function(){
    const b = getElement('b-triangle');
    const h = getElement('h-triangle');

    const inputMultiply = multiply(b, h);
    const area = 0.5 * inputMultiply;

    resultShow(area);
});


// Calculation of the Rectangle. 
document.getElementById('btn-ractangle').addEventListener('click', function(){
    const b = getElement('w-rectangle');
    const h = getElement('l-rectangle');

    const inputMultiply = multiply(b, h);
    const area = inputMultiply;

    resultShow(area);
});

