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

type Zmogus = { // Type aprasyme galime tureti atributus vardas:, amzius:, ir t.t.
    vardas: string;
    amzius: number;
    pasisveikinimas: () => void; // TYPE gali savyje tureti metodo/funkcijos deklaracija, bet negali tureti metodo/funkcijos su realizacija(vykdomuoju kodu),
    // tik deklaruojame metoda/funkcija ir nurodome - void (niekas).

    // CLASS sioje vietoje gali tureti metodo/funkcijos realizacija, todel butu galima rasyti:
    // pasisveikinimas() {
    //     console.log("Labas")

    // }


}


let jonas: Zmogus = {
    vardas: "Jonas",
    amzius: 21,
    pasisveikinimas() { // funkcijos/metodo realizacijos kodas nurodomas kintamajame/objekte, kai naudojame TYPE
        console.log("Labas")

    }
}

console.log("tt", jonas)