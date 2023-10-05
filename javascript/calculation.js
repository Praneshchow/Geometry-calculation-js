// --------- Calculation ------------
/*
Process: When a button clicked it will check which geometry calculation need. Then it will process. 
Total 6 types of calculation but most of the same without the formula. 
    
*/

// Calculation of the Triangle. 
document.getElementById('triangle').addEventListener('click', function(){
    const b = getElement('b-triangle');
    const h = getElement('h-triangle');

    const area = 0.5 * multiply(b, h);      // formula triangle Area = 0.5 * b * h        

    resultShow('Triangle', area);       // it will show the result. 
});


// Calculation of the Rectangle. 
document.getElementById('btn-ractangle').addEventListener('click', function(){
    const w = getElement('w-rectangle');
    const l = getElement('l-rectangle');

    const area = multiply(w, l);       // area = w * l
    resultShow('Rectangle', area);     // it will show the result. 
});

// Calculation of the Parallelogram. 
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const b = getElement('b-parallelogram');
    const h = getElement('h-parallelogram');

    const area = multiply(b, h);           // area = b * h
    resultShow('Parallelogram', area);     // it will show the result. 
});

// Calculation of the Rhombus. 
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const d1 = getElement('d1-rhombus');
    const d2 = getElement('d2-rhombus');
     
    const area = 0.5 * multiply(d1, d2);        // formula Area = 0.5 * d1 * d2
    resultShow('Rhombus', area);     // it will show the result. 
});

// Calculation of the Pentagon. 
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const p = getElement('p-pentagon');
    const b = getElement('b-pentagon');
     
    const area = 0.5 * multiply(p, b);        // formula Area = 0.5 * d1 * d2
    resultShow('Pentagon', area);     // it will show the result. 
});

// Calculation of the Ellipse. 
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const a = getElement('a-ellipse');
    const b = getElement('b-ellipse');
     
    const area = 3.1416 * multiply(a, b);        // formula Area = 0.5 * d1 * d2
    resultShow('Ellipse', area);     // it will show the result. 
});


// ------ Hover effect -------- 
// I applied hover effect only the Triangle Card. 
document.getElementById('color').addEventListener('mouseover', function(){
    const color = document.getElementById('color');
    const random = parseInt(Math.random()* 1000);

    color.style.backgroundColor = '#' + random ;
});