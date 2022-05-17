//tsc --target ES2016 /filepath/filename.ts --watch
class Darbuotojas {
    constructor(
    // aprašome kintamuosiaus atributus/kintamuosius
    _vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    // aprašome set ir get metodus
    get vardas() { return this._vardas; }
    set vardas(vardas) { this._vardas = vardas; }
    get pavarde() { return this._pavarde; }
    set pavarde(pavarde) { this._pavarde = pavarde; }
    get atlyginimas() { return this._atlyginimas; }
    set atlyginimas(atlyginimas) { this._atlyginimas = atlyginimas; }
    // aprasome mokesciu skaiciavimo metodus i
    gpm() { return this._atlyginimas * 0.2; }
    vsd() { return this._atlyginimas * 0.1252; }
    psd() { return this._atlyginimas * 0.0698; }
}
// masyvas sudarytas is "Darbuotojas", klases objektu
const darbuotojai = [];
// sukuriam nauja darbuotoja
const jonas = new Darbuotojas("Jonas", "Jonaitis", 1200);
// pakeiciame darbuotojo varda naudodami set vardas metoda
jonas.vardas = "Vebras";
const petras = new Darbuotojas("Petras", "Goga", 1300);
darbuotojai.push(jonas);
darbuotojai.push(petras);
// console.log(darbuotojai);
// istrinam 0 objekta is masyvo
// darbuotojai.splice(0, 1);
console.log(darbuotojai);
console.log(jonas.gpm());
let bendrasGpm = 0;
darbuotojai.forEach((e) => {
    console.log(e.vardas);
    bendrasGpm += e.gpm();
});
console.log(`Viso sumoketa GMP: `, bendrasGpm);
