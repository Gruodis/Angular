"use strict";
/*------------------

uzduotis - pakeisti Knygos PVM

*/
class Preke {
    constructor(_pavadinimas, //
    _kaina, //
    _kiekis) {
        this._pavadinimas = _pavadinimas;
        this._kaina = _kaina;
        this._kiekis = _kiekis;
    }
    get pavadinimas() { return this._pavadinimas; }
    get kaina() { return this._kaina; }
    get kiekis() { return this._kiekis; }
    kainaSuPVM() { return this._kaina * 1.21; }
}
// keiciame kainaSuPVM() metoda
class Knyga extends Preke {
    kainaSuPVM() {
        return this._kaina * 1.09;
    }
}
// keiciame kainaSuPVM() metoda
class Vaistai extends Preke {
    kainaSuPVM() {
        return this._kaina * 1.05;
    }
}
let sandelis = [];
// sukuriame objektus
sandelis.push(new Preke("Obuoliai", 2, 100));
sandelis.push(new Knyga("Dievu miskas", 10, 15));
sandelis.push(new Vaistai("Analginas", 10, 10));
// atvaizduojame visas prekes esancias sadelyje
sandelis.forEach((e) => {
    console.log(`Prekes pavadinimas: `, e.pavadinimas, ` kaina: `, e.kaina, `kaina su PVM`, e.kainaSuPVM(), ` kiekis: `, e.kiekis);
});
