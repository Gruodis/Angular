"use strict";
//tsc --target ES2016 /filepath/filename.ts --watch
class Darbinykas {
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
    toString() { return this._vardas + " " + this._pavarde + " " + this._atlyginimas; }
    toNumber() { return this._atlyginimas + this._atlyginimas * 2; }
}
// naudojame kompozicija, netiesiogiai redaguoti klase Darbuotojas duomenu atvaizdavima
class Kompozicija {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
        this._kompo = new Darbinykas(_vardas, _pavarde, _atlyginimas);
    } // sukuriame nauja objekta is Darbuotojas klases kintamuju
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
    toString() {
        return this._kompo.atlyginimas + " KOMP " + this._kompo.vardas + " VA " + this._kompo.pavarde;
    }
    toNumber() { return this._atlyginimas + this._atlyginimas * 2; }
    toPerskaiciuoti() { return this._atlyginimas * 2; }
}
class KompozicijaDu {
    constructor(_pirmas, _antras) {
        this._pirmas = _pirmas;
        this._antras = _antras;
    }
    toString() {
        return this._pirmas.toString() + " --- " + this._antras.toString();
    }
    apskaiciuoti() { return this._pirmas.toNumber(); }
}
// trecias metodas kompozicijai aprasyti - funkcija
const darbinykas = (vardas, pavarde, atlyginimas) => {
    return {
        vardas: vardas,
        pavarde: pavarde,
        atlyginimas: atlyginimas,
    };
};
const emp1 = darbinykas('Galvanauskas', 'Bronius', 500);
console.log(emp1);
// masyvas sudarytas is "Darbuotojas", klases objektu
const darbuotojai = [];
// sukuriam nauja darbuotoja
const jonas = new Darbinykas("Jonas", "Jonaitis", 1200);
// pakeiciame darbuotojo varda naudodami set vardas metoda
jonas.vardas = "Vebras";
const petras = new Darbinykas("Petras", "Goga", 1300);
const darius = new Kompozicija("Darius", "Kuosa", 1800);
// sukuriame nauja objekta is dvieju objektu naudodami kompozicija
const kompozicijaDu = new KompozicijaDu(new Darbinykas("Gediminas", "Gric", 1300), new Darbinykas("Algirdas", "Tumas", 1600)); // galime sukurti du naujus darbuotojus(objektus)
const kompozicijaTrys = new KompozicijaDu(jonas, petras); // galime naudoti anksciau sukurtus objektus
// issaugome objetus masyve
darbuotojai.push(jonas);
darbuotojai.push(petras);
darbuotojai.push(darius);
// darbuotojai.push(emp1);
// console.log(darbuotojai);
// istrinam 0 objekta is masyvo
// darbuotojai.splice(0, 1);
console.log(darbuotojai);
console.log(darbuotojai[0].vardas);
console.log(`Jonas GPM: ` + jonas.gpm());
// atvaizduojame duomenis naudodami kompoziciju metodus
console.log(`\nDarius: ` + darius.toString());
console.log(`\nJonas #2: ` + jonas.toNumber());
console.log(`\nDu darbuotojai kompozicija #1: ` + kompozicijaDu.toString());
console.log(`\nDu darbuotojai kompozicija #2: ` + kompozicijaTrys.toString());
console.log(`\nDu darbuotojai kompozicija #3: `, kompozicijaDu.apskaiciuoti());
let bendrasGpm = 0;
darbuotojai.forEach((e) => {
    console.log(`\n`, e.vardas, ` alga: `, e.atlyginimas, ` GPM: `, e.gpm(), `\n`);
    bendrasGpm += e.gpm();
});
// darbuotojai.forEach((obj) => {
//     console.log(`\n`, obj.vardas, obj.pavarde, obj.atlyginimas, obj.toNumber(), `\n`);
//     // Object.values(obj).forEach((val) => {
//     //     // 👇️ name Tom 0, country Chile 1
//     //     console.log(`Key: `, val);
//     // });
// });
console.log(`Viso sumoketa GMP: `, bendrasGpm);
console.log(`Viso sumoketa GMP: `, bendrasGpm);
