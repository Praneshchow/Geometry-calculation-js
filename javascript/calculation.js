// --------- Calculation ------------
/*
Process: When a button clicked it will check which geometry calculation need. Then it will process. 
Total 6 types of calculation but most of the same without the formula. 
    
*/

// Calculation of the Triangle. 
document.getElementById('triangle').addEventListener('click', function(){
    const b = getElement('b-triangle');
    const h = getElement('h-triangle');

    const inputMultiply = multiply(b, h);
    const area = 0.5 * inputMultiply;

    resultShow('Triangle', area);       // it will show the result. 
});


// Calculation of the Rectangle. 
document.getElementById('btn-ractangle').addEventListener('click', function(){
    const w = getElement('w-rectangle');
    const l = getElement('l-rectangle');

    const inputMultiply = multiply(w, l);
    const area = inputMultiply;

    resultShow('Rectangle', area);     // it will show the result. 

});

