"use strict";
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
    toString() { return this._vardas + " " + this._pavarde + " " + this._atlyginimas; }
    toNumber() { return this._atlyginimas + this._atlyginimas * 2; }
}
// naudojame kompozicija, netiesiogiai redaguoti klase Darbuotojas duomenu atvaizdavima
class Kompozicija {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
        this._kompo = new Darbuotojas(_vardas, _pavarde, _atlyginimas);
    } // sukuriame nauja objekta is Darbuotojas klases kintamuju
    toString() {
        return this._kompo.atlyginimas + " KOMP " + this._kompo.vardas + " VA " + this._kompo.pavarde;
    }
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
// trecias metodas kompozicijai aprasyti - funkcijai
const darbinykas = (vardas, pavarde, atlyginimas) => {
    return {
        _vardas: vardas,
        _pavarde: pavarde,
        _atlyginimas: atlyginimas,
    };
};
const emp1 = darbinykas('Galvanauskas', 'Bronius', 500);
console.log(emp1);
// masyvas sudarytas is "Darbuotojas", klases objektu
const darbuotojai = [];
// sukuriam nauja darbuotoja
const jonas = new Darbuotojas("Jonas", "Jonaitis", 1200);
// pakeiciame darbuotojo varda naudodami set vardas metoda
jonas.vardas = "Vebras";
const petras = new Darbuotojas("Petras", "Goga", 1300);
const darius = new Kompozicija("Darius", "Kuosa", 1800);
// sukuriame nauja objekta is dvieju objektu naudodami kompozicija
const kompozicijaDu = new KompozicijaDu(new Darbuotojas("Gediminas", "Gric", 1300), new Darbuotojas("Algirdas", "Tumas", 1600)); // galime sukurti du naujus darbuotojus(objektus)
const kompozicijaTrys = new KompozicijaDu(jonas, petras); // galime naudoti anksciau sukurtus objektus
// issaugome objetus masyve
darbuotojai.push(jonas);
darbuotojai.push(petras);
// darbuotojai.push(darius);
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
    console.log(e.vardas, ` alga: `, e.atlyginimas, ` GPM: `, e.gpm());
    bendrasGpm += e.gpm();
});
darbuotojai.forEach((obj) => {
    console.log(obj.vardas, obj.pavarde, obj.atlyginimas, obj.toNumber());
    // Object.values(obj).forEach((val) => {
    //     // 👇️ name Tom 0, country Chile 1
    //     console.log(`Key: `, val);
    // });
});
console.log(`Viso sumoketa GMP: `, bendrasGpm);
