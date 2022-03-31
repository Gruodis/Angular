"use strict";
// const outputAtsakymas: HTMLElement | null = document.getElementById("atsakymas");
const atsakymoDiv = document.getElementById("atsakymas");
const cmToInchButton = document.getElementById("action");
let numInch = document.getElementById("num_X");
console.log("input", parseInt(numInch.value));
// let geometrija = {
let cmToInch = {
    x: parseInt(numInch.value),
};
// console.log("geometrija", vykdom(cmToInch));
const vykdom = (p) => {
    return p.x / 2.54;
};
const vykdykKonvertavima = () => {
    cmToInch.x = numInch.valueAsNumber; // priskiriam nauja X reiksme, kuria ivedem i input
    if (atsakymoDiv != null) { // tikriname ar yra sukurtas HTML elemntas atsakymui ikelti
        // outputAtsakymas.innerHTML = vykdom(cmToInch).toString(); // .toString() konvertuoja NUMBER i STRING, kad galetu atvaizduoti innerHTML
        // outputAtsakymas.innerText = vykdom(cmToInch) + "<hr /> end."; // isveda <hr /> kaip Text elementa
        // outputAtsakymas.innerHTML = vykdom(cmToInch) + "<hr /> end."; // isveda <hr /> kaip HTML elementa
        // outputAtsakymas.innerHTML = "Atsakymas:" + vykdom(cmToInch);
        if (numInch.value != "") { // jeigu input fieldas nera tuscias
            console.log("input", parseInt(numInch.value));
            atsakymoDiv.innerHTML = `Atsakymas: ${numInch.value}` + "cm = " + parseFloat(vykdom(cmToInch).toFixed(2)) + " coliai"; // isveda <hr /> kaip HTML elementa
        }
        else { // jeigu input fieldas yra tuscias
            console.log("input2", parseInt(numInch.value));
            atsakymoDiv.innerHTML = "Empty field"; // isveda <hr /> kaip HTML elementa
        }
    }
};
if (cmToInchButton != null) {
    // cmToInch.x = +numInch.value; // konvertuojam STRING i Number su +
    // cmToInch.x = Number(numInch.value); // konvertuojam STRING i Number su Number()
    // cmToInch.x = parseInt(numInch.value); // konvertuojam STRING i Number su parseInt()
    // cmToInch.y = parseInt(numY.value);
    cmToInchButton.onclick = vykdykKonvertavima;
}
//
