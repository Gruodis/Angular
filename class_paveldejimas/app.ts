//tsc --target ES2016 /filepath/filename.ts --watch

// rasome interface, kurio pagalba galesime naudoti pasikartojanti metoda skirtingose klasese
interface GarsoSkleidikai {
    decibelai: number; // kintamasis
    garas: () => void; // funcija, tusti skliaustai - () ir void reiskia, kad nera grazinamas kazkoks rezultatas su return
    sudetis: (x: number, y: number) => number; // funkcija, kuri grazina rezultata
}
interface Kaina {
    kaina: number; // kintamasis

}

// tevine klase Gyvunas
// tevyne klase gali tureti tik viena tevine klase

class Gyvunas {

    constructor(
        protected _vardas: string, // protected leidzia kitoms klasems(extendet) pasiekti sita atributa
        protected _amzius: number

    ) { }

    // metodai

    public printInfo() {
        console.log(`Gyvuno vardu: `, this._vardas, `, amzius yra: `, this._amzius, "metu");
        console.log(`----------------------`)
    }

    public gyvunoAmzius() { console.log(`METODAS gyvunoAmzius(): `, this._vardas, `, metai: `, this._amzius) }
}

// aprasome paveldejimo klase
// klase Suo, paveldi kintamuosius bei metodus is tevines klases Gyvunas
class Suo extends Gyvunas {
    // rasome konstriutoriu, kad prideti papildoma kintamaji Veisle
    constructor(
        _vardas: string, // objekto kintamasis
        _amzius: number, // objekto kintamasis
        protected _veisle: string // objekto atributas
    ) {
        super(_vardas, _amzius);
    }
    public override printInfo() {
        // console.log(`Suo vardu: `, this._vardas, `\n suns amzius yra: `, this._amzius, "metu \n", " veisle", this._veisle);
        console.log(`Tipas: Suo`);
        super.printInfo(); // iskvieciame tevines klases Gyvunas metoda printInfo
        console.log(`Veisle: `, this._veisle);
    }

    public loja() { console.log(`AU au`) }

}


class Kate extends Gyvunas {
    public override printInfo() {
        console.log(`Tipas: Katinas`);
        super.printInfo(); // iskvieciame tevines klases Gyvunas metoda printInfo


        // console.log(`Katinas vardu: `, this._vardas, `, katino amzius yra: `, this._amzius, "metu")
    }

}

// rasome paveldejima klasei, kuri yra paveldetoja

class Taksas extends Suo implements GarsoSkleidikai, Kaina { // galime naudoti daugiau negu viena interface class Taksas extends Suo implements GarsoSkleidikai, KitasInterface

    constructor(
        _vardas: string, // objekto kintamasis
        _amzius: number, // objekto kintamasis
        _veisle: string, // objekto atributas
        private _ilgis: number, // objekto kintamasis
        public decibelai: number, // objekto kintamasis
        public kaina: number // objekto kintamasis


    ) {

        super(_vardas, _amzius, _veisle)
    }

    public get vardas() { return this._vardas } // atributas vardas imamas is tevines klases(Gyvunas) konstruktoriaus
    public garas(): void { console.log("---takso METODAS garsas(): ", this.decibelai, `dB`, ` kaina: ${this.kaina}`) } // metodas;

    // funkcija, kuri grazina suma
    public sudetis(x: number, y: number): number {
        return x + y;
    }
}

/*----------------------------------------------------------------

sukuriame klase Siurblys nesusijusia su Gyvunas klase,
bet abi sios klases turi metoda garsas()

*/
class Siurblys implements GarsoSkleidikai {
    constructor(
        private _gamintojas: string, //
        private _modelis: number, //
        public decibelai: number // objekto kintamasis


    ) { }
    public garas(): void { console.log("---siurblio METODAS garsas(): ", this._gamintojas, this._modelis, this.decibelai, `dB`) } // atributas;
    // funkcija, kuri grazina suma
    public sudetis(x: number, y: number): number {
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

console.log("\n ---METODAS sudetis: ", siurblys.sudetis(6, 4), "\n\n")


// sukuriame masyva
let zoo: Gyvunas[] = [];
// ikeliam i vasyva
zoo.push(augintinis, augintinis2, augintinis3, augintinis4, augintinis5);


zoo.forEach((e) => {
    e.printInfo();

    console.log(`\n`)
})

/* --------------------------------

rasome funkcija su kuria panaudosime GarsoSkleidikai esancius metodus

*/

let twoTimes = (e: GarsoSkleidikai) => { // i funkcijos parametra gali patekti tik objektas su interface GarsoSkleidikai
    e.garas();
    e.garas();
}

// iskvieciame funkcija naudodami objekta

twoTimes(siurblys);