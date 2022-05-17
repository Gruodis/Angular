//tsc --target ES2016 /filepath/filename.ts --watch

class Darbuotojas {
    constructor(
        // aprašome kintamuosiaus atributus/kintamuosius

        private _vardas: string,
        private _pavarde: string,
        private _atlyginimas: number
    ) {

    }

    // aprašome set ir get metodus
    public get vardas() { return this._vardas }
    public set vardas(vardas: string) { this._vardas = vardas }

    public get pavarde() { return this._pavarde }
    public set pavarde(pavarde: string) { this._pavarde = pavarde }

    public get atlyginimas() { return this._atlyginimas }
    public set atlyginimas(atlyginimas: number) { this._atlyginimas = atlyginimas }

    // aprasome mokesciu skaiciavimo metodus i

    public gpm() { return this._atlyginimas * 0.2 }

    public vsd() { return this._atlyginimas * 0.1252 }

    public psd() { return this._atlyginimas * 0.0698 }

}
// masyvas sudarytas is "Darbuotojas", klases objektu
const darbuotojai: Darbuotojas[] = [];

// sukuriam nauja darbuotoja
const jonas: Darbuotojas = new Darbuotojas("Jonas", "Jonaitis", 1200);
// pakeiciame darbuotojo varda naudodami set vardas metoda
jonas.vardas = "Vebras";
const petras: Darbuotojas = new Darbuotojas("Petras", "Goga", 1300);


darbuotojai.push(jonas);
darbuotojai.push(petras);



// console.log(darbuotojai);
// istrinam 0 objekta is masyvo
// darbuotojai.splice(0, 1);
console.log(darbuotojai);
console.log(jonas.gpm());

let bendrasGpm = 0;

darbuotojai.forEach((e: Darbuotojas) => {
    console.log(e.vardas);
    bendrasGpm += e.gpm();

});

console.log(`Viso sumoketa GMP: `, bendrasGpm);

