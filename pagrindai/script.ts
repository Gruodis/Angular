// Pagrindai
// Kintamuju tipai:

let g: number = 10;
let h: string = "Labas";
let f: boolean = false; // true or false
let j: any = 55;
let masyvasNumbers: number[] = [1, 2, 3, 4, 5];
let masyvasStrings: string[] = ["labas", 'vakaras', 'vaikuciai'];


enum Spalva { Juoda, Geltona, Balta };

let dazai: Spalva = Spalva.Juoda;

console.log(dazai);


function log(message) {
    console.log(message);
};




log('Hello world!');


// Tipai

// let kintamais = 5;
let kintamais; // deklaruojame ANY tipo kintamaji
kintamais = 5;
kintamais = "Penki";

let vardas = 'Aurelijus';

// vardas.endsWith("umas");
console.log(vardas);

let pavarde: string;

pavarde = 'Stanaitis';

console.log('Labas, mano vardas', vardas, pavarde);


// ANY tipo kintamojo konvertavimas i string ar kita tipa

let skaicius; // ANY tipo kintamasis

skaicius = 5;

let keiciamKintamohoTipa: number;

keiciamKintamohoTipa = skaicius; // nera priskirimo klaidos, jeigu nenaudojamas "strict" formatas

// keiciamKintamohoTipa = (<number>skaicius); // konvertavimas

keiciamKintamohoTipa = (skaicius as number); // konvertavimas

let a;

function beta() {

    a = 5;
}

beta()

console.log(a)


// Funkcija dvieju kintamusu sumai paskaiciuoti


// paduodame funkcijai NUMBER tipo argumnetus
function suma(x: number, y: number): number { // ):number {... - nurodome, kad funkcija privalo grazinti skaiciu;

    return x + y;
}

console.log(suma(5, 10));

// ARROW funkcija (lambda)

let suma2 = (x: number, y: number): number => {
    return x + y;
}

console.log(suma2(25, 10));