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

            let npd = 0;
            let npd2 = 0;



            // let visoTaxes = parseInt(darbuotojas.atlyginimasPSD) + parseInt(darbuotojas.atlyginimasGPM) + parseInt(darbuotojas.atlyginimasVSD);

            // console.log(visoTaxes)

            // sukuriam DOM elementus kiekvienam darbuotojui:

            // div elementas, kuriame bus paragrafas su darbuotojo info ir button(delete-employee) elementas
            const div = document.createElement('div');
            div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");

            if (darbuotojas.atlyginimas > 730) {
                npd += parseInt((460 + 0.26 * (darbuotojas.atlyginimas - 730)).toFixed(2));
                npd2 += parseInt((460 + 0.26 * (darbuotojas.atlyginimas - 730)).toFixed(2));
                console.log('TEST', darbuotojas.vardas)
            }

            if (darbuotojas.atlyginimas < 730) {
                npd += 460;
                npd2 += 460;
                console.log('TEST', darbuotojas.vardas)
            }

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


            // buttonEdit(edit-employee)
            const buttonEdit = document.createElement('button');
            buttonEdit.setAttribute("class", "btn btn-success edite-item");
            buttonEdit.innerHTML = "<i class=\"bi bi-pencil-square \"></i>";

            // button(delete-employee)
            const button = document.createElement('button');
            button.setAttribute("class", "btn btn-danger delete-item");
            button.innerHTML = "<i class=\"bi bi-trash3\"></i>";

            // sudedame elementus vieną į kitą(append)
            div.append(p, button, buttonEdit);
            outputEmpList.appendChild(div);


            // funkcija konkrečios anketos redagavimui
            buttonEdit.onclick = () => {
                // editSingleEmployee(index);
                console.log("Edit: ", darbuotojas.vardas);
                inputVardas.value = darbuotojas.vardas;
                inputPavarde.value = darbuotojas.pavarde;
                inputAtlyginimas.valueAsNumber = darbuotojas.atlyginimas;
            }

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
            if (inputVardas.value === "") { emptyField = "Vardas" };
            if (inputPavarde.value === "") { emptyField = "Pavarde" };
            if (inputAtlyginimas.value.length === 0) { emptyField = "Atlyginimas" };
            return alert("Neužpildyti laukai: " + emptyField)
        }
    }

}

// funkcija konkretaus darbuotojo anketos trinimui
let editSingleEmployee = (index: number) => { // pasiimame objekto, kuri trinsime "index" reikšmę
    darbuotojas.splice(index, 1) // triname objektą su atitinkamu "index" iš masyvo "darbuotojas" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // išsaugome pasikeitusią informaciją į localStorage
    localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
    // atvaizduojame pasiveiktusius duomenis DOM elementuose
    output();
    console.log("index edit , index: " + index)
}

// funkcija konkretaus darbuotojo anketos trinimui
let deleteSingleEmployee = (index: number) => { // pasiimame objekto, kuri trinsime "index" reikšmę
    darbuotojas.splice(index, 1) // triname objektą su atitinkamu "index" iš masyvo "darbuotojas" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // išsaugome pasikeitusią informaciją į localStorage
    localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
    // atvaizduojame pasiveiktusius duomenis DOM elementuose
    output();
}

// funkcija visu anketu trinimui
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
const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));

console.log("id", id)