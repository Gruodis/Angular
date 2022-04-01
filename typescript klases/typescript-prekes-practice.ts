/*


practice



*/

const outputAtsakymas = document.getElementById("atsakymas");
const actionButton = document.getElementById("action");
const clearStorageButton = document.getElementById("clear");
let inputName = document.getElementById("preke_pavadinimas") as HTMLInputElement;
let inputPrice = document.getElementById("preke_kaina") as HTMLInputElement;
let inputAmount = document.getElementById("preke_kiekis") as HTMLInputElement; // galime gauti value su metodu - inputName.value;


class Prekes {

    constructor(
        private _pavadinimas: string,
        private _kaina: number,
        private _kiekis: number
    ) { }

    get pavadinimas() { return this._pavadinimas; }
    get kainaSuPVM() { return this._kaina * 1.21; }
    get kiekis() { return this._kiekis; }
}
// DUOMENU ATVAIZDAVIMAS
// arrow funkcija ivestu(input laukuose) duomenu atvaizdavimui
let rodykPrekiuSarasa = () => {

    let tmp: string = '';
    tiekejas.forEach(preke => { // is objekto formuojam prekiu sarasa su forEach
        tmp += "Prekes pavadinimas: " + preke.pavadinimas + '<br>' + " Kaina su PVM: " + preke.kainaSuPVM + '<br>' + " Kiekis: " + preke.kiekis + '<br><hr>';
    })
    if (outputAtsakymas != null) {
        outputAtsakymas.innerHTML = tmp; // atvaizdavimas DOM
    }
};

const tiekejas: Prekes[] = []; // deklaruojam tuscia masyva i kuri bus push'inami duomenys is pildymo formos

// imam issaugotus duomenis is localStorage
let jsonParse = localStorage.getItem('saugomLocalStorage');
function nuskaitomLocalStorage() {
    if (jsonParse != null) {

        let dataBank = JSON.parse(jsonParse);
        console.log('DATA: ', dataBank);

        interface prekesAtributai { // deklaruojame atributus supushinimui i Class Prekes
            _pavadinimas: string,
            _kaina: number,
            _kiekis: number
        }
        dataBank.forEach((preke: prekesAtributai) => { // imame JSON objektus
            let applyClass = new Prekes(preke._pavadinimas, preke._kaina, preke._kiekis); // konstruojam JSON objektus pagal class Prekes template'a
            tiekejas.push(applyClass); // pushinam objektus sukonstruotus pagal class Prekes template'a i tiekejas masyva

        }
        );
        rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach) 
    };
}
nuskaitomLocalStorage(); 


console.log('Tiekejas ą ', tiekejas);

// IVESTU DUOMENU PUSH i masyva
if (actionButton != null) { //butina patikrinti ar egzistuoja DOM elementai(mygtukas ir input laukai)
    actionButton.onclick = () => {
        tiekejas.push(new Prekes(inputName.value, inputPrice.valueAsNumber, inputAmount.valueAsNumber)); // push'inam ivestus duomenis i masyva
        rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach)
        localStorage.setItem('saugomLocalStorage', JSON.stringify(tiekejas))

        console.log('Tiekejas b ', tiekejas, inputName.value, inputPrice.valueAsNumber, inputAmount.valueAsNumber);

    }
}
// clear()
if (clearStorageButton != null) { //butina patikrinti ar egzistuoja DOM elementai(mygtukas ir input laukai)
    clearStorageButton.onclick = () => {
        tiekejas.push(new Prekes(inputName.value, inputPrice.valueAsNumber, inputAmount.valueAsNumber)); // push'inam ivestus duomenis i masyva
        rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach)
        localStorage.setItem('saugomLocalStorage', JSON.stringify(tiekejas))

        console.log('Tiekejas b ', tiekejas, inputName.value, inputPrice.valueAsNumber, inputAmount.valueAsNumber);

    }
}
console.log(tiekejas, inputPrice, inputAmount)



// tiekejas.push(new Prekes("Apelsinai", 2.57, 700));

// // console.log('Stringify ' + JSON.stringify(tiekejas));
// // console.log(JSON.parse(tiekejas));

// let tempObj = JSON.stringify(tiekejas);
// console.log('TEMP: ' + tempObj);

// let dataBank = JSON.parse(tempObj.toString());
// console.log('DATA: ', dataBank);

// console.log('DATA: ', dataBank[0]._pavadinimas);

// const tiekejasParseData: Prekes[] = []; // deklaruojam tuscia masyva gautos JSON data supushinimui

// interface prekesAtributai { // deklaruojame atributus supushinimui i Class Prekes
//     _pavadinimas: string,
//     _kaina: number,
//     _kiekis: number
// }
// dataBank.forEach((preke: prekesAtributai) => { // imame JSON objektus
//     let applyClass = new Prekes(preke._pavadinimas, preke._kaina, preke._kiekis); // konstruojam JSON objektus pagal class Prekes template'a
//     tiekejasParseData.push(applyClass); // pushinam objektus sukonstruotus pagal class Prekes template'a i tiekejasParseData

// }
// );

// console.log('Original tada', tiekejas)
// console.log('Supusinta data', tiekejasParseData)
// // tiekejas.forEach(preke => {
// //     console.log(preke.pavadinimas, preke.kainaSuPVM, preke);
// // }
// // );
