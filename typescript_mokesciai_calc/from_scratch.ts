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

let inputVardas = <HTMLInputElement>document.getElementById('vardas');
let inputPavarde = <HTMLInputElement>document.getElementById('pavarde');
let inputAtlyginimas = <HTMLInputElement>document.getElementById('atlyginimas');
const outputEmpList = document.getElementById('output-employees-list');
const outputTaxes = document.getElementById('output-taxes');
const btnAddEmploy = document.getElementById('add-employee');
const btnDeleteAllData = document.getElementById('delete-all-data');

console.log("DOM ", inputVardas, inputPavarde, inputAtlyginimas, outputEmpList, outputTaxes, btnAddEmploy, btnDeleteAllData);

class Anketa {
    constructor(
        private _vardas: string,
        private _pavarde: string,
        private _atlyginimas: number

    ) { }


    get vardas() { return this._vardas };
    get pavarde() { return this._pavarde };
    get atlyginimas() { return this._atlyginimas };
    get atlyginimasGPM() { return ((20 / 100) * this._atlyginimas).toFixed(2); };
    get atlyginimasVSD() { return ((6.98 / 100) * this._atlyginimas).toFixed(2); };
    get atlyginimasPSD() { return ((12.52 / 100) * this._atlyginimas).toFixed(2); };

    set atlyginimasNPD(newAtlyginimas: number) { this._atlyginimas = newAtlyginimas };

}


let darbuotojas: Anketa[] = [];

let output = () => {

    if (outputTaxes != null && outputEmpList != null) {

        // išvalom seną info prieš atvaizduodami naują

        outputEmpList.innerHTML = '';
        outputTaxes.innerHTML = '';

        // atvaizduojam darbuotojų info sarašą

        darbuotojas.forEach((darbuotojas, index) => {

            if (darbuotojas.atlyginimas < 400) {

            }



            // let visoTaxes = parseInt(darbuotojas.atlyginimasPSD) + parseInt(darbuotojas.atlyginimasGPM) + parseInt(darbuotojas.atlyginimasVSD);

            // console.log(visoTaxes)

            // sukuriam DOM elementus kiekvienam darbuotojui:

            // div elementas, kuriame bus paragrafas su darbuotojo info ir button(delete-employee) elementas
            const div = document.createElement('div');
            div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");

            let npd = (460 - 0.26 * (1573.32 - 730)).toFixed(2);
            let npd2 = (((darbuotojas.atlyginimas + 730) - 460 * 0.26)).toFixed(2);

            // paragrafas su darbuotojo info
            const p = document.createElement("p");
            p.innerHTML = " index: <strong>" + index + '</strong><br>' +
                "Vardas: <strong>" + darbuotojas.vardas + '</strong><br>' +
                "Pavardė: <strong>" + darbuotojas.pavarde + '</strong><br>' +
                "Atlyginimas: <strong>" + darbuotojas.atlyginimas + '</strong><br>' +
                "NPD: <strong>" + npd + '</strong><br>' + //460 – 0,26 x (gyventojo mėnesio su darbo santykiais susijusios pajamos – 730 Eur);
                "NPD2: <strong>" + npd2 + '</strong><br>' + //460 – 0,26 x (gyventojo mėnesio su darbo santykiais susijusios pajamos – 730 Eur);
                "GPM: <strong>" + darbuotojas.atlyginimasGPM + '</strong><br>' +
                "VSD: <strong>" + darbuotojas.atlyginimasVSD + '</strong><br>' +
                "PSD: <strong>" + darbuotojas.atlyginimasPSD + '</strong><br>' +
                "VISO mokesčiai: <strong>" + (parseInt(darbuotojas.atlyginimasPSD) + parseInt(darbuotojas.atlyginimasGPM) + parseInt(darbuotojas.atlyginimasVSD)) + '</strong><br>' +
                "Atlyginimas su mokesčiais: <strong>" + (parseInt(darbuotojas.atlyginimasPSD) + parseInt(darbuotojas.atlyginimasGPM) + parseInt(darbuotojas.atlyginimasVSD) + darbuotojas.atlyginimas) + '</strong>';

            // button(delete-employee)
            const button = document.createElement('button');
            button.setAttribute("class", "btn btn-danger delete-item");
            button.innerHTML = "<i class=\"bi bi-x-lg\"></i>";

            // sudedame elementus vieną į kitą(append)
            div.append(p, button);
            outputEmpList.appendChild(div);

            // funkcija konkrečios anketos trinimui

            button.onclick = () => {
                deleteSingleEmployee(index);
                console.log("Istrintas: ", darbuotojas.vardas);
            }

        })



    }

}; // function end

// atsisiunčiame duomenis iš localSorage
let remoteData = localStorage.getItem('saugomLocalStorage')

if (remoteData != null) {

    let parseJSON = JSON.parse(remoteData);

    interface Atributai {
        _vardas: string,
        _pavarde: string,
        _atlyginimas: number
    }

    parseJSON.forEach((anketa: Atributai) => {
        let construct = new Anketa(anketa._vardas, anketa._pavarde, anketa._atlyginimas)
        darbuotojas.push(construct)
    });
    output();
}

// funkcija iš input fields surinktų duomenų išsaugojimui
if (inputVardas != null && inputPavarde != null && inputAtlyginimas != null && btnAddEmploy != null) {

    btnAddEmploy.onclick = () => { // priskiriame mygtukui eventListener(onclick) su funkciją
        darbuotojas.push(new Anketa(inputVardas.value, inputPavarde.value, inputAtlyginimas.valueAsNumber)); //sukuriame naujo darbuotojo anketą pagal class Anketa
        localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
        console.log("LocalStorage", localStorage.getItem('saugomLocalStorage'))
        console.log("masyvas", darbuotojas);
        output();
    }

}

// funkcija individualaus darbuotojo anketos trinimui
let deleteSingleEmployee = (index: number) => { // pasiimame objekto, kuri trinsime "index" reikšmę
    darbuotojas.splice(index, 1) // triname objektą su atitinkamu "index" iš masyvo "darbuotojas" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // išsaugome pasikeitusią informaciją į localStorage
    localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
    // atvaizduojame pasiveiktusius duomenis DOM elementuose
    output();
}

// funkcija individualaus darbuotojo anketos trinimui
if (btnDeleteAllData != null && outputEmpList != null) {
    btnDeleteAllData.onclick = () => { // pasiimame objekto, kuri trinsime "index" reikšmę
        // ištriname informaciją iš localStorage
        localStorage.removeItem('saugomLocalStorage');
        // ištriname informaciją iš masyvo
        darbuotojas = [];
        // atvaizduojame pasiveiktusius duomenis DOM elementuose
        output();
    }
}