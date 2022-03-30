// faktorialas
var faktorialas = function (x) {
    var rezult = 1;
    for (var i = 1; i <= x; i++) {
        rezult *= i;
    }
    return rezult;
};
console.log(faktorialas(5));
console.log(faktorialas(2));
// dvieju kintamuju bendras didziausias daliklis
var bdd = function (x, y) {
    var rezult;
    for (var i = x; i > 0; i--) {
        console.log('bdd 1', i);
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
};
console.log('bdd ', bdd(24, 15));
var darom = function (p) {
    return Math.sqrt(p.x ^ 2 + p.y ^ 2);
};
// let geometrija = {
var geometrija = {
    x: 5,
    y: 5
};
console.log("geometrija", darom(geometrija));
