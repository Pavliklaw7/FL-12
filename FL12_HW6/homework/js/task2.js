"use strict";

let a = prompt("Please, specify A side", "Triangle sides length"),
    b = prompt("Please, specify B side", "Triangle sides length"),
    c = prompt("Please, specify C side", "Triangle sides length"),
    sideA = parseInt(a),
    sideB = parseInt(b),
    sideC = parseInt(c);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {    
        alert("Input values should be ONLY numbers!");
    } else if (sideA == 0 || sideB == 0 || sideC == 0) {
        alert("A triangle must have 3 sides with a positive definite length!");
    } else if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) {  
        console.log("Triangle doesn’t exist");
    } else if (sideA == sideB && sideB == sideC) {
        console.log("Equilateral triangle");
    } else if ((sideA == sideB && sideB != sideC) || (sideB == sideC && sideC != sideA) || (sideC == sideA && sideA != sideB)) {
        console.log("Isosceles triangle");
    } else if (sideA != sideB && sideA != sideC && sideB != sideC) {
        console.log("Scalene triangle");
    } 
