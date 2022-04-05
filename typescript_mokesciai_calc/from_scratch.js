"use strict";
/*

Darbuotojo duomenu anketa:

Vardas;
Pavarde;
Atlyginimas;
button "Išsaugoti";
button "Ištrinti viską";
button "Ištrinti konkrečią anketą"


1. Galimybė suvesti duomenis:
    1.a. deklaruojame DOM elementus;
    1.b. deklaruotiems input DOM elementams naudojame <HTMLInputElement>, kad gauti papildomus metodus;
    1.c. sukuriame class Darbuotojas;
    1.d. klases viduje sukuriame construktor su kintamaisiais:
        1.d.a. private _vardas: string;
        1.d.b. private _pavarde: string;
        1.d.c. private _atlyginimas: number;
    1.c. rasome "get" metodus kintamiesiems - vardas, pavarde, atlyginimas;


2. išsaugoti duomenis į localStorage;
2.a. sukuriame masyvą darbuotojas = [], kuriame saugosime sesijos duomenis;
tikriname ar egzistuoja DOM elementai(input field'ai, button, output), egzistuoja sugeneruotame HTML;
3. ištrinti duomenis iš localStorage;





*/
let inputVardas = document.getElementById('vardas');
let inputPavarde = document.getElementById('pavarde');
let inputAtlyginimas = document.getElementById('atlyginimas');
const outputEmpList = document.getElementById('output-employees-list');
const outputTaxes = document.getElementById('output-taxes');
const btnAddEmploy = document.getElementById('add-employee');
const btnDeleteAllData = document.getElementById('delete-all-data');
console.log("DOM ", inputVardas, inputPavarde, inputAtlyginimas, outputEmpList, outputTaxes, btnAddEmploy, btnDeleteAllData);
class Anketa {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    get vardas() { return this._vardas; }
    ;
    get pavarde() { return this._pavarde; }
    ;
    get atlyginimas() { return this._atlyginimas; }
    ;
    get gmp() { return parseFloat((0.2 * this._atlyginimas).toFixed(2)); }
    ;
    get vsd() { return parseFloat((0.0698 * this._atlyginimas).toFixed(2)); }
    ;
    get psd() { return parseFloat((0.1252 * this._atlyginimas).toFixed(2)); }
    ;
    get sum() { return this.gmp + this.vsd + this.psd; }
    ;
}
let darbuotojas = [];
let output = () => {
    if (outputTaxes != null && outputEmpList != null) {
        // išvalom seną info prieš atvaizduodami naują
        outputEmpList.innerHTML = '';
        outputTaxes.innerHTML = '';
        let gmpSuma = 0;
        let vsdSuma = 0;
        let psdSuma = 0;
        // atvaizduojam darbuotojų info sarašą
        darbuotojas.forEach((darbuotojas, index) => {
            let npd = 0;
            gmpSuma += darbuotojas.gmp;
            vsdSuma += darbuotojas.vsd;
            psdSuma += darbuotojas.psd;
            if (darbuotojas.atlyginimas > 730) {
                npd += parseInt((460 - 0.26 * (1573.32 - 730)).toFixed(2));
                console.log('NPD, kai alga > 730', npd);
            }
            if (darbuotojas.atlyginimas < 730) {
                npd += 460;
                console.log('NPD, kai alga < 730', darbuotojas.vardas);
            }
            // let visoTaxes = parseInt(darbuotojas.atlyginimasPSD) + parseInt(darbuotojas.atlyginimasGPM) + parseInt(darbuotojas.atlyginimasVSD);
            // console.log(visoTaxes)
            // sukuriam DOM elementus kiekvienam darbuotojui:
            // div elementas, kuriame bus paragrafas su darbuotojo info ir button(delete-employee) elementas
            const div = document.createElement('ul');
            div.setAttribute("class", "list-group");
            // paragrafas su darbuotojo info
            // const p = document.createElement("li");
            // p.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
            console.log('YYY');
            const decorStart = "<li class=\"list-group-item d-flex justify-content-between align-items-center\">";
            const decorEnd = "</li>";
            div.innerHTML = decorStart + "index: <strong>" + index + '</strong>' + decorEnd +
                decorStart + "Vardas: <strong>" + darbuotojas.vardas + '</strong>' + decorEnd +
                decorStart + "Pavardė: <strong>" + darbuotojas.pavarde + '</strong>' + decorEnd +
                decorStart + "Atlyginimas: <strong>" + darbuotojas.atlyginimas + '€</strong>' + decorEnd +
                decorStart + "NPD: <strong>" + npd + '€</strong>' + decorEnd + //460 – 0,26 x (gyventojo mėnesio su darbo santykiais susijusios pajamos – 730 Eur);
                decorStart + "GPM: <strong>" + darbuotojas.gmp + '€</strong>' + decorEnd +
                decorStart + "VSD: <strong>" + darbuotojas.vsd + '€</strong>' + decorEnd +
                decorStart + "PSD: <strong>" + darbuotojas.psd + '€</strong>' + decorEnd +
                decorStart + "VISO mokesčiai: <strong>" + (darbuotojas.sum).toFixed(2) + '€</strong>' + decorEnd;
            console.log('XXX');
            const divButtons = document.createElement('div');
            divButtons.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center pt-5");
            // buttonEdit(edit-employee)
            const buttonEdit = document.createElement('button');
            buttonEdit.setAttribute("class", "btn btn-success edite-item");
            buttonEdit.innerHTML = "<i class=\"bi bi-pencil-square \"></i>";
            // button(delete-employee)
            const button = document.createElement('button');
            button.setAttribute("class", "btn btn-danger delete-item");
            button.innerHTML = "<i class=\"bi bi-trash3\"></i>";
            // sudedame elementus vieną į kitą(append)
            // div.append(p);
            divButtons.append(buttonEdit, button);
            outputEmpList.append(divButtons, div);
            // funkcija konkrečios anketos redagavimui
            buttonEdit.onclick = () => {
                // editSingleEmployee(index);
                console.log("Edit: ", darbuotojas.vardas);
                inputVardas.value = darbuotojas.vardas;
                inputPavarde.value = darbuotojas.pavarde;
                inputAtlyginimas.valueAsNumber = darbuotojas.atlyginimas;
            };
            // funkcija konkrečios anketos trinimui
            button.onclick = () => {
                if (confirm('Ar tikrai norite ištrinti darbuotojo anketą?')) {
                    // Save it!
                    deleteSingleEmployee(index);
                }
                else {
                    // Do nothing!
                    console.log('Thing was not saved to the database.');
                }
                // deleteSingleEmployee(index);
                console.log("Istrintas: ", darbuotojas.vardas);
            };
        });
        // paragrafas imones sumokamu mokesciu apidendrinimui
        const pTaxes = document.createElement("p");
        const decorStart = "<div class=\"list-group-item d-flex justify-content-between align-items-center\">";
        const decorEnd = "</div>";
        pTaxes.innerHTML = decorStart + "Benda GMP suma: <strong>" + (gmpSuma).toFixed(2) + '€</strong>' + decorEnd +
            decorStart + "Benda VSD suma:<strong>" + (vsdSuma).toFixed(2) + '€</strong>' + decorEnd +
            decorStart + "Benda PSD suma:<strong>" + (psdSuma).toFixed(2) + '€</strong>' + decorEnd +
            decorStart + "Bendra mokesčių suma:<strong>" + (psdSuma + vsdSuma + gmpSuma).toFixed(2) + '€</strong>' + decorEnd;
        outputTaxes.appendChild(pTaxes);
        console.log("decoras", decorStart, decorEnd);
    }
}; // function end
// atsisiunčiame duomenis iš localSorage
let remoteData = localStorage.getItem('saugomLocalStorage');
if (remoteData != null) {
    let parseJSON = JSON.parse(remoteData);
    parseJSON.forEach((anketa) => {
        let construct = new Anketa(anketa._vardas, anketa._pavarde, anketa._atlyginimas);
        darbuotojas.push(construct);
    });
    output();
}
// funkcija iš input fields surinktų duomenų išsaugojimui
if (inputVardas != null && inputPavarde != null && inputAtlyginimas != null && btnAddEmploy != null) {
    btnAddEmploy.onclick = () => {
        if (inputVardas.value != "" && inputPavarde.value != "" && inputAtlyginimas.valueAsNumber != null) {
            darbuotojas.push(new Anketa(inputVardas.value, inputPavarde.value, inputAtlyginimas.valueAsNumber)); //sukuriame naujo darbuotojo anketą pagal class Anketa
            localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
            // console.log("LocalStorage", localStorage.getItem('saugomLocalStorage'))
            // console.log("masyvas", darbuotojas);
            inputVardas.value = '';
            inputPavarde.value = '';
            inputAtlyginimas.value = '';
            output();
        }
        else {
            let emptyField = '';
            if (inputVardas.value === "") {
                emptyField = "Vardas";
            }
            ;
            if (inputPavarde.value === "") {
                emptyField = "Pavarde";
            }
            ;
            if (inputAtlyginimas.value.length === 0) {
                emptyField = "Atlyginimas";
            }
            ;
            return alert("Neužpildyti laukai: " + emptyField);
        }
    };
}
// funkcija konkretaus darbuotojo anketos trinimui
let editSingleEmployee = (index) => {
    darbuotojas.splice(index, 1); // triname objektą su atitinkamu "index" iš masyvo "darbuotojas" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // išsaugome pasikeitusią informaciją į localStorage
    localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
    // atvaizduojame pasiveiktusius duomenis DOM elementuose
    output();
    console.log("index edit , index: " + index);
};
// funkcija konkretaus darbuotojo anketos trinimui
let deleteSingleEmployee = (index) => {
    darbuotojas.splice(index, 1); // triname objektą su atitinkamu "index" iš masyvo "darbuotojas" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // išsaugome pasikeitusią informaciją į localStorage
    localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
    // atvaizduojame pasiveiktusius duomenis DOM elementuose
    output();
};
// funkcija visu anketu trinimui
if (btnDeleteAllData != null && outputEmpList != null) {
    btnDeleteAllData.onclick = () => {
        // ištriname informaciją iš localStorage
        localStorage.removeItem('saugomLocalStorage');
        // ištriname informaciją iš masyvo
        darbuotojas = [];
        // atvaizduojame pasiveiktusius duomenis DOM elementuose
        output();
    };
}
const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
console.log("id", id);
let gpm = 0;
let sum = 0;
darbuotojas.forEach((e) => {
    console.log(e.vardas, e.gmp, e.atlyginimas);
    gpm += e.gmp;
    sum += e.sum;
});
console.log("Įmonė turės sumokėti: " + gpm, sum);
