// static kintamasis priklauso klasei o ne kuriamam objektui

class Failas {
    public static iD: number = 0;
    constructor(
        private pavadinimas: string,
        private confidential: boolean

    ) {
        Failas.iD++;
    }

    public info() { return this.pavadinimas + ' ' + this.confidential }
}

const f1 = new Failas('Byla 1', true);
const f2 = new Failas('Byla 1', false);
const f3 = new Failas('Byla 1', true);

console.log(f1.info(), f2.info(), f3.info(), Failas.iD)