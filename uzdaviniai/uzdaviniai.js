"use strict";
// faktorialas
let faktorialas = (x) => {
    let rezult = 1;
    for (let i = 1; i <= x; i++) {
        rezult *= i;
    }
    return rezult;
};
console.log(faktorialas(5));
console.log(faktorialas(2));
// dvieju kintamuju bendras didziausias daliklis
let bdd = (x, y) => {
    let rezult = 1;
    for (let i = x; i > 0; i--) {
        console.log('bdd 1', i);
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
    return rezult;
};
console.log('Bdd ', bdd(45, 2025));
let darom = (p) => {
    return Math.sqrt(p.x * p.x + p.y * p.y);
};
// let geometrija = {
let geometrija = {
    x: 5,
    y: 5
};
console.log("geometrija", darom(geometrija));
