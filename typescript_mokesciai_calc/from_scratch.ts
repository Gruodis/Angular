/*


Darbuotojo duomenu anketa:

input Vardas;
input Pavarde;
input Atlyginimas;
action button "Išsaugoti užpildytą anketą";
action button "Redaguoti konkrečią anketą";
action button "Ištrinti konkrečią anketą";
action button "Ištrinti viską";

Duomenų apdorojimas ir atvaizdavimas:
kiekvienoje anketoje atvaizduoti(vardas, pavarde, atlyginimas);
kiekvienoje anketoje suskaičiuoti (NPD, GMP, VSD, PSD);

atskirame DOM elemente susumuoti ir atvaizduoti bendrą informaciją(GMP, PSD, VSD, Bendra mokesčių suma);


Extra features:

prieš išsaugant anketos duomenis, patikrinti ar užpildyti input laukai;
prieš ištrinant anketą, gauti patvirtinimą "OK/CANCEL";


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

// console.log("DOM ", inputVardas, inputPavarde, inputAtlyginimas, outputEmpList, outputTaxes, btnAddEmploy, btnDeleteAllData);


let idTemp: number; //laikinas kitamasis atsisustiems id is localStorage

    //!!!!!!! atsisiunciant/irasant duomenis JSON.parse / JSON.stringify nereikia naudoti, kai kintamasis yra NUMBER 
let checkID = () => {
    let idExist = localStorage.getItem('storeID'); // atsisiunciame duomenis
    if (idExist === null) { // jeigu duomenu apie id neradome ar jie sugadinti, kintamajam id priskiriam 0
        idTemp = 0;
        console.log('idtemp 0 ', idTemp);
    }

    if (idExist != null) {
        // let x = JSON.parse(idExist); // isitikiname, kad gautas is localStorage kintamasis yra sveikasis skaicius
        idTemp = JSON.parse(idExist); // isitikiname, kad gautas is localStorage kintamasis yra sveikasis skaicius
    }
}
checkID();

console.log('GET: ===> ');

class Anketa {
    constructor(
        private _userId: number,
        private _vardas: string,
        private _pavarde: string,
        private _atlyginimas: number

    ) { }


    get userId() { return this._userId };
    get vardas() { return this._vardas };
    get pavarde() { return this._pavarde };
    get atlyginimas() { return this._atlyginimas };
    get gmp() { return parseFloat((0.2 * this._atlyginimas).toFixed(2)); };
    get vsd() { return parseFloat((0.0698 * this._atlyginimas).toFixed(2)); };
    get psd() { return parseFloat((0.1252 * this._atlyginimas).toFixed(2)); };
    get sum() { return this.gmp + this.vsd + this.psd };



    // set atlyginimasNPD(newAtlyginimas: number) { this._atlyginimas = newAtlyginimas };

}


let darbuotojas: Anketa[] = [];

let checkIfEmpty = () => {
    if (darbuotojas.length === 0 && outputEmpList != null && outputTaxes != null) {
        outputTaxes.innerHTML = '';

        const pLs = document.createElement('p');
        const pTx = document.createElement('p');
        pLs.innerHTML = "Duomenų bazė - tuščia.";
        pTx.innerHTML = "Duomenų bazė - tuščia.";
        outputEmpList.appendChild(pLs);
        outputTaxes.appendChild(pTx);
    }
}
checkIfEmpty();


let output = () => {


    if (outputTaxes != null && outputEmpList != null) {




        // išvalom seną DOM turinį prieš atvaizduodami naują

        outputEmpList.innerHTML = '';
        outputTaxes.innerHTML = '';


        let gmpSuma = 0;
        let vsdSuma = 0;
        let psdSuma = 0;
        // atvaizduojam darbuotojų info sarašą

        darbuotojas.forEach((darbuotojas, id) => {

            let npd = 0;

            gmpSuma += darbuotojas.gmp;
            vsdSuma += darbuotojas.vsd;
            psdSuma += darbuotojas.psd;



            if (darbuotojas.atlyginimas > 730) {
                npd += parseInt((460 - 0.26 * (1573.32 - 730)).toFixed(2));
                console.log('NPD, kai alga > 730', npd)
            }

            if (darbuotojas.atlyginimas < 730) {
                npd += 460;

                console.log('NPD, kai alga < 730', darbuotojas.vardas)
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

            console.log('YYY')

            const decorStart = "<li class=\"list-group-item d-flex justify-content-between align-items-center\">";
            const decorEnd = "</li>";
            div.innerHTML = decorStart + "id: <strong>" + darbuotojas.userId + '</strong>' + decorEnd +
                decorStart + "Vardas: <strong>" + darbuotojas.vardas + '</strong>' + decorEnd +
                decorStart + "Pavardė: <strong>" + darbuotojas.pavarde + '</strong>' + decorEnd +
                decorStart + "Atlyginimas: <strong>" + darbuotojas.atlyginimas + '€</strong>' + decorEnd +
                decorStart + "NPD: <strong>" + npd + '€</strong>' + decorEnd +//460 – 0,26 x (gyventojo mėnesio su darbo santykiais susijusios pajamos – 730 Eur);
                decorStart + "GPM: <strong>" + darbuotojas.gmp + '€</strong>' + decorEnd +
                decorStart + "VSD: <strong>" + darbuotojas.vsd + '€</strong>' + decorEnd +
                decorStart + "PSD: <strong>" + darbuotojas.psd + '€</strong>' + decorEnd +
                decorStart + "VISO mokesčiai: <strong>" + (darbuotojas.sum).toFixed(2) + '€</strong>' + decorEnd;
            console.log('XXX')

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
                // editSingleEmployee(id);
                console.log("Edit: ", darbuotojas.vardas);
                inputVardas.value = darbuotojas.vardas;
                inputPavarde.value = darbuotojas.pavarde;
                inputAtlyginimas.valueAsNumber = darbuotojas.atlyginimas;
            }

            // funkcija konkrečios anketos trinimui
            button.onclick = () => {
                if (confirm('Ar tikrai norite ištrinti darbuotojo anketą?')) {
                    // Save it!
                    deleteSingleEmployee(id);
                } else {
                    // Do nothing!
                    console.log('Atsaukta.');
                }
                // deleteSingleEmployee(id);
                console.log("Istrintas: ", darbuotojas.vardas);
            }

        });


        // paragrafas imones sumokamu mokesciu apidendrinimui

        if (darbuotojas.length > 0) {
        const pTaxes = document.createElement("p");
        const decorStart = "<div class=\"list-group-item d-flex justify-content-between align-items-center\">";
        const decorEnd = "</div>";
        pTaxes.innerHTML = decorStart + "Bendra GMP suma: <strong>" + (gmpSuma).toFixed(2) + '€</strong>' + decorEnd +
            decorStart + "Bendra VSD suma:<strong>" + (vsdSuma).toFixed(2) + '€</strong>' + decorEnd +
            decorStart + "Bendra PSD suma:<strong>" + (psdSuma).toFixed(2) + '€</strong>' + decorEnd +
            decorStart + "Bendra mokesčių suma:<strong>" + (psdSuma + vsdSuma + gmpSuma).toFixed(2) + '€</strong>' + decorEnd;
        outputTaxes.appendChild(pTaxes);

            console.log("decoras", decorStart, decorEnd);
        }
        else {
            outputTaxes.innerHTML = '';

            const pLs = document.createElement('p');
            const pTx = document.createElement('p');
            pLs.innerHTML = "Duomenų bazė - tuščia.";
            pTx.innerHTML = "Duomenų bazė - tuščia.";
            outputEmpList.appendChild(pLs);
            outputTaxes.appendChild(pTx);
        }
        if (btnDeleteAllData != null) {
            btnDeleteAllData.innerText = ("Ištrinti visas (" + darbuotojas.length + ") anketas");
        }

    }
}; // function end

// atsisiunčiame duomenis iš localSorage
let remoteData = localStorage.getItem('saugomLocalStorage');

if (remoteData != null) {

    let parseJSON = JSON.parse(remoteData);

    interface Atributai {
        _userId: number,
        _vardas: string,
        _pavarde: string,
        _atlyginimas: number
    }
    parseJSON.forEach((anketa: Atributai) => {
        let construct = new Anketa(anketa._userId, anketa._vardas, anketa._pavarde, anketa._atlyginimas)
        darbuotojas.push(construct)
    });

    output();
}



// funkcija iš input fields surinktų duomenų išsaugojimui
if (inputVardas != null && inputPavarde != null && inputAtlyginimas != null && btnAddEmploy != null) {

    btnAddEmploy.onclick = () => { // priskiriame mygtukui eventListener(onclick) su funkciją

        if (inputVardas.value != "" && inputPavarde.value != "" && inputAtlyginimas.valueAsNumber != null) {

            console.log('Isaugom nauja anketa GET: ===> ');
            darbuotojas.push(new Anketa(idTemp, inputVardas.value, inputPavarde.value, inputAtlyginimas.valueAsNumber)); //sukuriame naujo darbuotojo anketą pagal class Anketa
            localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
            idTemp++;
            localStorage.setItem('storeID', JSON.stringify(idTemp)) // irasome sugeneruota id i localStorage
            // console.log("LocalStorage", localStorage.getItem('saugomLocalStorage'))
            // console.log("masyvas", darbuotojas);
            inputVardas.value = '';
            inputPavarde.value = '';
            inputAtlyginimas.value = '';
            console.log('GET: ===> ');
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

// funkcija konkretaus darbuotojo anketos redagavimui
let editSingleEmployee = (id: number) => { // pasiimame objekto, kuri trinsime "id" reikšmę
    darbuotojas.splice(id, 1) // triname objektą su atitinkamu "id" iš masyvo "darbuotojas" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // išsaugome pasikeitusią informaciją į localStorage
    localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
    // atvaizduojame pasiveiktusius duomenis DOM elementuose
    output();
    console.log("id edit , id: " + id)
}

// funkcija konkretaus darbuotojo anketos trinimui
let deleteSingleEmployee = (id: number) => { // pasiimame objekto, kuri trinsime "id" reikšmę
    darbuotojas.splice(id, 1) // triname objektą su atitinkamu "id" iš masyvo "darbuotojas" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // išsaugome pasikeitusią informaciją į localStorage
    localStorage.setItem('saugomLocalStorage', JSON.stringify(darbuotojas));
    // atvaizduojame pasiveiktusius duomenis DOM elementuose
    output();
}

// funkcija visu anketu trinimui
if (btnDeleteAllData != null && outputEmpList != null) {
    btnDeleteAllData.innerText = ("Ištrinti visas (" + darbuotojas.length + ") anketas");
    btnDeleteAllData.onclick = () => { // pasiimame objekto, kuri trinsime "id" reikšmę
        // ištriname informaciją iš localStorage
        localStorage.removeItem('saugomLocalStorage');
        // ištriname informaciją iš masyvo
        darbuotojas = [];
        // atvaizduojame pasiveiktusius duomenis DOM elementuose
        console.log("masyvas == > ", darbuotojas.length);
        output();
    }
}
// const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));

// console.log("id", id)

let gpm = 0;
let sum = 0;
darbuotojas.forEach((e: Anketa) => {
    console.log(e.userId, e.vardas, e.gmp, e.atlyginimas);
    gpm += e.gmp;
    sum += e.sum
});
console.log("Įmonė turės sumokėti: " + gpm, sum);