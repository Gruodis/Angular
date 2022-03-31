"use strict";
/*
Class - yra objekto template, pvz. Zmogus yra class, o konkretus zmogus(Jonas), yra objektas su savybemis: amzius, ugis, svoris, asmens kodas ir t.t.
!!! TYPE - nera praktisko poreikio naudoti, nebent labai specifineje situacijoje.


Kokias savybes gali tureti interface, type ir class:

                        interface | type | class
Atributai/kintamieji:     taip    | taip | taip
Metodo deklaravimas:      taip    | taip | taip
Metodo su vykdymu:        ne      |  ne  | taip
Modifikatoriai:           ne      |  ne  | taip
Paveldejimas:             taip    | ne   | taip

*/
let jonas = {
    vardas: "Jonas",
    amzius: 21,
    pasisveikinimas() {
        console.log("Labas");
    }
};
console.log("tt", jonas);
