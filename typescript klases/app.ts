/*
TypeScript - Data Modifiers
In object-oriented programming, the concept of 'Encapsulation' is used to make class members public or private i.e. a class can control the visibility of its data members.
This is done using access modifiers.
https://www.tutorialsteacher.com/typescript/data-modifiers


Class - yra objekto template, pvz. Zmogus yra class, o konkretus zmogus(Jonas), yra objektas su savybemis: amzius, ugis, svoris, asmens kodas ir t.t.
!!! TYPE - nera praktisko poreikio naudoti, nebent labai specifineje situacijoje.


Kokias savybes gali tureti interface, type ir class:

                            interface | type | class
Atributai/kintamieji:       taip    | taip | taip
Metodo deklaravimas:        taip    | taip | taip
Metodo su vykdymu:          ne      |  ne  | taip
Modifikatoriai (Modifiers): ne      |  ne  | taip
Paveldejimas:               taip    | ne   | taip


Class

https://www.typescriptlang.org/docs/handbook/2/classes.html


*/

class Zmogus {

    // public vardas: string; // public(by default) - leidzia pakeisti kintamojo reiksme uz class ribu.
    // private amzius: number; // private - neleidzia keisti kintamojo reiksmes uz class ribu.
    // private mailas?: string;

    // constructor(vardas: string, amzius: number, mailas?: string) {

    // this.vardas = vardas;
    // this.amzius = amzius;
    // this.mailas = mailas;

    // sutrumpinimas auksciau esancio kodo
    constructor(
        private _vardas: string,
        private _amzius: number,
        private _mailas?: string
    ) {


        if (this._vardas == 'Petras') {
            this._amzius = 100; // galie keisti kintamaji tik class viduje arba naudojant - set
        }
        if (this._mailas == undefined) {
            this._mailas = "tuscias email value \n"; // galie keisti kintamaji tik class viduje
        }
        else {
            this._mailas = _mailas + " turiu e-mail. \n"; // galie keisti kintamaji tik class viduje
        }



    }

    // public getVardas() { // naudojame zemiau esanti get Vardas()
    //     return this.vardas;
    // }
    get vardas() {
        return this._vardas + '\n \n';
    }
    // set naudojame saugiai pakeisti kintamojo reiksmes, kai nurodytas - private(modifier), 
    // bet vietoje public setAmzius(...), naudojame zemiau esanti uzrasyma su set Amzius(...)
    // public setAmzius(amziusNew: number) {

    //     if (amziusNew < 18) {
    //         this.amzius = amziusNew;
    //         console.log(this.vardas + ' YRA Nepilnametis!')
    //     }
    //     else {
    //         this.amzius = amziusNew;
    //     }
    // }
    set amzius(amziusNew: number) {
        if (amziusNew < 18) {
            this._amzius = amziusNew;
            console.log(this._vardas + ' YRA Nepilnametis! \n \n')
        }
        else {
            this._amzius = amziusNew;
        }
    }
    set vardas(vardasNew: string) {
            this._vardas = vardasNew;

    }


    // private output() { // neleistu issikviesti sio metodo uz class ribu.
    output() {
        console.log('Mano vardas ' + this._vardas + ', man ' + this._amzius + ' metai. ' + this._mailas + '\n \n');
    }

}

const jonas = new Zmogus('Jonas', 32);
const petras = new Zmogus('Petras', 54, 'emailas@gmail.com');

// galime keisti public kintamojo reiksme naudodami:
// jonas.vardas = 'Karabasas'; 
// petras.amzius = 300;

// pakeisti private kintamojo reiksme, naudojame
// jonas.setAmzius(16);
// vietoje jonas.setAmzius() naudojame jonas.Amzius = 14;
petras.amzius = 14;
petras.vardas = "Kazys"

// console.log('getVardas: ' + petras.getVardas()); // vietoje petras.getVardas() naudojame petras.Vardas
console.log('get Vardas: ' + petras.vardas);



jonas.output();
petras.output();


