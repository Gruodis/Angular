// Pagrindai
// Kintamuju tipai:
var g = 10;
var h = "Labas";
var f = false; // true or false
var j = 55;
var masyvasNumbers = [1, 2, 3, 4, 5];
var masyvasStrings = ["labas", 'vakaras', 'vaikuciai'];
var Spalva;
(function (Spalva) {
    Spalva[Spalva["Juoda"] = 0] = "Juoda";
    Spalva[Spalva["Geltona"] = 1] = "Geltona";
    Spalva[Spalva["Balta"] = 2] = "Balta";
})(Spalva || (Spalva = {}));
;
var dazai = Spalva.Juoda;
console.log(dazai);
function log(message) {
    console.log(message);
}
;
log('Hello world!');
// Tipai
// let kintamais = 5;
var kintamais; // deklaruojame ANY tipo kintamaji
kintamais = 5;
kintamais = "Penki";
var vardas = 'Aurelijus';
// vardas.endsWith("umas");
console.log(vardas);
var pavarde;
pavarde = 'Stanaitis';
console.log('Labas, mano vardas', vardas, pavarde);
// ANY tipo kintamojo konvertavimas i string ar kita tipa
var skaicius; // ANY tipo kintamasis
skaicius = 5;
var keiciamKintamohoTipa;
keiciamKintamohoTipa = skaicius; // nera priskirimo klaidos, jeigu nenaudojamas "strict" formatas
// keiciamKintamohoTipa = (<number>skaicius); // konvertavimas
keiciamKintamohoTipa = skaicius; // konvertavimas
var a;
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
var suma2 = function (x, y) {
    return x + y;
};
console.log(suma2(25, 10));
