"use strict";
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
    constructor(vardas, amzius, mailas) {
        this.vardas = vardas;
        this.amzius = amzius;
        this.mailas = mailas;
        if (this.vardas == 'Petras') {
            this.amzius = 100; // galie keisti kintamaji tik class viduje arba naudojant - set
        }
        if (this.mailas == undefined) {
            this.mailas = "tuscias email value"; // galie keisti kintamaji tik class viduje
        }
        else {
            this.mailas = mailas + " tutu"; // galie keisti kintamaji tik class viduje
        }
    }
    //set naudojame saugiai pakeisti kintamojo reiksmes, kai nurodytas - private(modifier)
    setAmzius(amziusNew) {
        if (amziusNew < 18) {
            this.amzius = amziusNew;
            console.log(this.vardas + ' YRA Nepilnametis!');
        }
        else {
            this.amzius = amziusNew;
        }
    }
    getVardas() {
        return this.vardas;
    }
    // private output() { // neleistu issikviesti sio metodo uz class ribu.
    output() {
        console.log('Mano vardas ' + this.vardas + ', man ' + this.amzius + ' metai. ' + this.mailas + '');
    }
}
const jonas = new Zmogus('Jonas', 32);
const petras = new Zmogus('Petras', 54, 'emailas@gmail.com');
jonas.vardas = 'Karabasas'; // galime keisti public kintamojo reiksme
// petras.amzius = 300; // galime keisti public kintamojo reiksme
jonas.setAmzius(16);
console.log('getVardas: ' + petras.getVardas());
jonas.output();
petras.output();
