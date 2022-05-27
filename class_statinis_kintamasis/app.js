"use strict";
// static kintamasis priklauso klasei o ne kuriamam objektui
class Failas {
    constructor(pavadinimas, confidential) {
        this.pavadinimas = pavadinimas;
        this.confidential = confidential;
        Failas.iD++;
    }
    info() { return this.pavadinimas + ' ' + this.confidential; }
}
Failas.iD = 0;
const f1 = new Failas('Byla 1', true);
const f2 = new Failas('Byla 1', false);
const f3 = new Failas('Byla 1', true);
console.log(f1.info(), f2.info(), f3.info(), Failas.iD);
