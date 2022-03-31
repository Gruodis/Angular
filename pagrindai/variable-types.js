"use strict";
/*



Pagrindai


// Kintamuju tipai:

*/
let g = 10;
let h = "Labas";
let f = false; // true or false
let j = 55;
let masyvasNumbers = [1, 2, 3, 4, 5];
let masyvasStrings = ["labas", 'vakaras', 'vaikuciai'];
var Spalva;
(function (Spalva) {
    Spalva[Spalva["Juoda"] = 0] = "Juoda";
    Spalva[Spalva["Geltona"] = 1] = "Geltona";
    Spalva[Spalva["Balta"] = 2] = "Balta";
})(Spalva || (Spalva = {}));
;
let dazai = Spalva.Juoda;
console.log(dazai);
function log(message) {
    console.log(message);
}
;
log('Hello world!');
// Tipai
// let kintamais = 5;
let kintamais; // deklaruojame ANY tipo kintamaji
kintamais = 5;
kintamais = "Penki";
let vardas = 'Aurelijus';
// vardas.endsWith("umas");
console.log(vardas);
let pavarde;
pavarde = 'Stanaitis';
console.log('Labas, mano vardas', vardas, pavarde);
// ANY tipo kintamojo konvertavimas i string ar kita tipa
let skaicius; // ANY tipo kintamasis
skaicius = 5;
let keiciamKintamojoTipa;
keiciamKintamojoTipa = skaicius; // nera priskirimo klaidos, jeigu nenaudojamas "strict" formatas
// keiciamKintamojoTipa = (<number>skaicius); // konvertavimas
keiciamKintamojoTipa = skaicius; // konvertavimas
let a;
function beta() {
    a = 5;
}
beta();
console.log(a);
// Funkcija dvieju kintamusu sumai paskaiciuoti
// paduodame funkcijai NUMBER tipo argumnetus
function suma(x, y) {
    return x + y;
}
console.log(suma(5, 10));
// ARROW funkcija (lambda)
let suma2 = (x, y) => {
    return x + y;
};
console.log(suma2(25, 10));
