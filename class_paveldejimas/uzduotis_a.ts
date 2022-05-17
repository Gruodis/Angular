/*------------------

uzduotis - pakeisti Knygos PVM

*/

interface Pvm {

}

class Preke {
    constructor(
        private _pavadinimas: string, //
        protected _kaina: number, //
        private _kiekis: number, //
    ) { }

    get pavadinimas() { return this._pavadinimas; }
    get kaina() { return this._kaina; }
    get kiekis() { return this._kiekis; }

    public kainaSuPVM() { return this._kaina * 1.21; }
}

// keiciame kainaSuPVM() metoda
class Knyga extends Preke {

    public override kainaSuPVM() {
        return this._kaina * 1.09;
    }

}
// keiciame kainaSuPVM() metoda
class Vaistai extends Preke {

    public override kainaSuPVM() {
        return this._kaina * 1.05;
    }

}

let sandelis: Preke[] = [];

// sukuriame objektus

sandelis.push(new Preke("Obuoliai", 2, 100))
sandelis.push(new Knyga("Dievu miskas", 10, 15))
sandelis.push(new Vaistai("Analginas", 10, 10))

// atvaizduojame visas prekes esancias sadelyje

sandelis.forEach((e: Preke) => { // imame objektus is Tevines klases Preke, kuri apima ir child klase Knyga

    console.log(`Prekes pavadinimas: `, e.pavadinimas, ` kaina: `, e.kaina, `kaina su PVM`, e.kainaSuPVM(), ` kiekis: `, e.kiekis)

})