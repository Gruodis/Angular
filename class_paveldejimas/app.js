"use strict";
//tsc --target ES2016 /filepath/filename.ts --watch
// tevine klase Gyvunas
// tevyne klase gali tureti tik viena tevine klase
class Gyvunas {
    constructor(_vardas, // protected leidzia kitoms klasems(extendet) pasiekti sita atributa
    _amzius) {
        this._vardas = _vardas;
        this._amzius = _amzius;
    }
    // metodai
    printInfo() {
        console.log(`Gyvuno vardu: `, this._vardas, `, amzius yra: `, this._amzius, "metu");
        console.log(`----------------------`);
    }
    gyvunoAmzius() { console.log(`METODAS gyvunoAmzius(): `, this._vardas, `, metai: `, this._amzius); }
}
// aprasome paveldejimo klase
// klase Suo, paveldi kintamuosius bei metodus is tevines klases Gyvunas
class Suo extends Gyvunas {
    // rasome konstriutoriu, kad prideti papildoma kintamaji Veisle
    constructor(_vardas, // objekto kintamasis
    _amzius, // objekto kintamasis
    _veisle // objekto atributas
    ) {
        super(_vardas, _amzius);
        this._veisle = _veisle;
    }
    printInfo() {
        // console.log(`Suo vardu: `, this._vardas, `\n suns amzius yra: `, this._amzius, "metu \n", " veisle", this._veisle);
        console.log(`Tipas: Suo`);
        super.printInfo(); // iskvieciame tevines klases Gyvunas metoda printInfo
        console.log(`Veisle: `, this._veisle);
    }
    loja() { console.log(`AU au`); }
}
class Kate extends Gyvunas {
    printInfo() {
        console.log(`Tipas: Katinas`);
        super.printInfo(); // iskvieciame tevines klases Gyvunas metoda printInfo
        // console.log(`Katinas vardu: `, this._vardas, `, katino amzius yra: `, this._amzius, "metu")
    }
}
// rasome paveldejima klasei, kuri yra paveldetoja
class Taksas extends Suo {
    constructor(_vardas, // objekto kintamasis
    _amzius, // objekto kintamasis
    _veisle, // objekto atributas
    _ilgis, // objekto kintamasis
    decibelai, // objekto kintamasis
    kaina // objekto kintamasis
    ) {
        super(_vardas, _amzius, _veisle);
        this._ilgis = _ilgis;
        this.decibelai = decibelai;
        this.kaina = kaina;
    }
    get vardas() { return this._vardas; } // atributas vardas imamas is tevines klases(Gyvunas) konstruktoriaus
    garas() { console.log("---takso METODAS garsas(): ", this.decibelai, `dB`, ` kaina: ${this.kaina}`); } // metodas;
    // funkcija, kuri grazina suma
    sudetis(x, y) {
        return x + y;
    }
}
/*----------------------------------------------------------------

sukuriame klase Siurblys nesusijusia su Gyvunas klase,
bet abi sios klases turi metoda garsas()

*/
class Siurblys {
    constructor(_gamintojas, //
    _modelis, //
    decibelai // objekto kintamasis
    ) {
        this._gamintojas = _gamintojas;
        this._modelis = _modelis;
        this.decibelai = decibelai;
    }
    garas() { console.log("---siurblio METODAS garsas(): ", this._gamintojas, this._modelis, this.decibelai, `dB`); } // atributas;
    // funkcija, kuri grazina suma
    sudetis(x, y) {
        return x + y;
    }
}
// sukuriame gyvuno objektus
let augintinis = new Suo("Ciucis", 12, "Koli");
let augintinis2 = new Kate("Pupa", 2);
let augintinis3 = new Kate("Buckis", 5);
let augintinis4 = new Suo("Bobas", 7, "Taksas");
let augintinis5 = new Taksas("Desrainis", 9, "Taksas", 10, 60, 3000);
augintinis5.gyvunoAmzius();
augintinis5.garas();
// sukuriame Siurblio objekta
let siurblys = new Siurblys("Audra", 1991 - 11, 5);
siurblys.garas();
// iskvieciame sudeties funkcija
console.log("\n ---METODAS sudetis: ", siurblys.sudetis(6, 4), "\n\n");
// sukuriame masyva
let zoo = [];
// ikeliam i vasyva
zoo.push(augintinis, augintinis2, augintinis3, augintinis4, augintinis5);
zoo.forEach((e) => {
    e.printInfo();
    console.log(`\n`);
});
/* --------------------------------

rasome funkcija su kuria panaudosime GarsoSkleidikai esancius metodus

*/
let twoTimes = (e) => {
    e.garas();
    e.garas();
};
// iskvieciame funkcija naudodami objekta
twoTimes(siurblys);
