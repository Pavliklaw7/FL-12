"use strict";

let a = parseInt(prompt("Enter a Value")),
    b = parseInt(prompt("Enter b Value")),
    c = parseInt(prompt("Enter c Value")),
    D = (b * b) - (4 * a * c),
    x = ( -b + Math.sqrt(D) ) / (2 * a),
    x2 = ( -b - Math.sqrt(D) ) / (2 * a);

    console.log (a, b, c);
    console.log (D);

if (isNaN(a) || isNaN(b) || isNaN(c) || (a == 0)) {
    console.log("Invalid input data");
} else if (D == 0) {
    console.log(x);
} else if (D > 0) {
    console.log("x = " + x , "; x2 = " + x2);
} else if (D < 0) {
    console.log("no solution");
} else if ( D == 0 && x == 0) {
    console.log("x = 0");
}


