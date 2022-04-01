"use strict";
/*


practice



*/
const outputAtsakymas = document.getElementById("atsakymas");
const actionButton = document.getElementById("action");
const clearStorageButton = document.getElementById("clear");
let inputName = document.getElementById("preke_pavadinimas");
let inputPrice = document.getElementById("preke_kaina");
let inputAmount = document.getElementById("preke_kiekis"); // galime gauti value su metodu - inputName.value;
class Prekes {
    constructor(_pavadinimas, _kaina, _kiekis) {
        this._pavadinimas = _pavadinimas;
        this._kaina = _kaina;
        this._kiekis = _kiekis;
    }
    get pavadinimas() { return this._pavadinimas; }
    get kaina() { return this._kaina; }
    get kainaSuPVM() { return this._kaina * 1.21; }
    get kiekis() { return this._kiekis; }
    set seTpavadinimas(vardasNew) { this._pavadinimas = vardasNew; }
    set seTkaina(newKaina) { this._kaina = newKaina; }
    set seTkainaSuPVM(newKainaPvm) { this._kaina = newKainaPvm * 1.21; }
    set seTkiekis(newKiekis) { this._kiekis = newKiekis; }
}
// DUOMENU ATVAIZDAVIMAS
// arrow funkcija ivestu(input laukuose) duomenu atvaizdavimui
let rodykPrekiuSarasa = () => {
    let tmp = '';
    tiekejas.forEach(preke => {
        tmp += "Prekė: <strong>" + preke.pavadinimas.toUpperCase() + '<br>'
            + "</strong> Kaina: <strong>" + preke.kainaSuPVM.toFixed(2) + '</strong>€ <i >su PVM</i>, <strong>' + preke.kaina + '</strong>€ <i>be PVM</i><br>' //parseFloat(vykdom(cmToInch).toFixed(2)
            // + "</strong> Kaina su PVM: <strong>" + preke.kainaSuPVM + '</strong> € <br>' //parseFloat(vykdom(cmToInch).toFixed(2)
            + " Kiekis: <strong>" + Math.floor(preke.kiekis) + '</strong><br><hr>';
    });
    if (outputAtsakymas != null) {
        outputAtsakymas.innerHTML = tmp; // atvaizdavimas DOM
    }
};
let tiekejas = []; // deklaruojam tuscia masyva i kuri bus push'inami duomenys is pildymo formos
// atsisiunciam issaugotus duomenis is localStorage
let jsonParse = localStorage.getItem('saugomLocalStorage');
if (jsonParse != null) {
    let dataBank = JSON.parse(jsonParse);
    console.log('DATA: ', dataBank);
    dataBank.forEach((preke) => {
        let applyClass = new Prekes(preke._pavadinimas, preke._kaina, preke._kiekis); // konstruojam JSON objektus pagal class Prekes template'a
        tiekejas.push(applyClass); // pushinam objektus sukonstruotus pagal class Prekes template'a i tiekejas masyva
    });
    rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach) 
}
;
// IVESTU DUOMENU PUSH i masyva
if (actionButton != null) { //butina patikrinti ar egzistuoja DOM elementai(mygtukas ir input laukai)
    actionButton.onclick = () => {
        if (inputName.value != '' && inputPrice.value.length != 0 && inputAmount.value.length != 0) { // tikriname ar visi input laukai uzpildyti
            tiekejas.push(new Prekes(inputName.value, inputPrice.valueAsNumber, inputAmount.valueAsNumber)); // push'inam ivestus duomenis i masyva
            rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach)
            localStorage.setItem('saugomLocalStorage', JSON.stringify(tiekejas));
            // isvalom input laukus po sekmingo duomenu issaugojimo
            inputName.value = '';
            inputPrice.value = '';
            inputAmount.value = '';
        }
        else { // pranesame apie neuzpildytus laukus
            alert("LAUKAI tusti");
        }
    };
}
// clear()
if (clearStorageButton != null && outputAtsakymas != null) { //butina patikrinti ar egzistuoja DOM elementai(mygtukas ir input laukai)
    clearStorageButton.onclick = () => {
        tiekejas = [];
        window.localStorage.removeItem('saugomLocalStorage'); // istrinam duomenis is localStorage
        console.log('trinam');
        outputAtsakymas.innerHTML = ''; // istrinam info apie preke is DOM
    };
}
console.log(tiekejas, inputPrice, inputAmount);
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
let someArray = [
    { name: "Kristian", lines: "2,5,10" },
    { name: "John", lines: "1,19,26,96" },
    { name: "Kristian", lines: "2,58,160" },
    { name: "Felix", lines: "1,19,26,96" }
];
someArray = someArray.filter(person => person.name != 'John');
console.log(someArray);
