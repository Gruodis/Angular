"use strict";
// const outputAtsakymas: HTMLElement | null = document.getElementById("atsakymas");
const outputAtsakymas = document.getElementById("atsakymas");
const actionButton = document.getElementById("action");
let numX = document.getElementById("num_X");
let numY = document.getElementById("num_Y");
console.log("input", parseInt(numX.value), parseInt(numY.value));
// let geometrija = {
let geometrija2 = {
    x: parseInt(numX.value),
    y: parseInt(numX.value)
};
// console.log("geometrija", darom2(geometrija2));
const darom2 = (p) => {
    return Math.sqrt(p.x * p.x + p.y * p.y);
};
const skaiciuokKaiPaspausiu = () => {
    geometrija2.x = numX.valueAsNumber; // priskiriam nauja X reiksme, kuria ivedem i input
    geometrija2.y = numY.valueAsNumber; // priskiriam nauja Y reiksme, kuria ivedem i input
    if (outputAtsakymas != null) {
        // outputAtsakymas.innerHTML = darom2(geometrija2).toString(); // .toString() konvertuoja NUMBER i STRING, kad galetu atvaizduoti innerHTML
        // outputAtsakymas.innerText = darom2(geometrija2) + "<hr /> end."; // isveda <hr /> kaip Text elementa
        // outputAtsakymas.innerHTML = darom2(geometrija2) + "<hr /> end."; // isveda <hr /> kaip HTML elementa
        outputAtsakymas.innerHTML = "Atsakymas: " + darom2(geometrija2) + "<br> end."; // isveda <hr /> kaip HTML elementa
        // outputAtsakymas.innerHTML = "Atsakymas:" + darom2(geometrija2);
        console.log("input", parseInt(numX.value), parseInt(numY.value));
    }
};
if (actionButton != null) {
    // geometrija2.x = +numX.value; // konvertuojam STRING i Number su +
    // geometrija2.x = Number(numX.value); // konvertuojam STRING i Number su Number()
    // geometrija2.x = parseInt(numX.value); // konvertuojam STRING i Number su parseInt()
    // geometrija2.y = parseInt(numY.value);
    actionButton.onclick = skaiciuokKaiPaspausiu;
}
//
