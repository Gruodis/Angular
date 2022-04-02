/*


practice



*/

const outputAtsakymas = document.getElementById("atsakymas");
const bendraInfo = document.getElementById("bendra-info");

const actionButton = document.getElementById("action");
const clearStorageButton = document.getElementById("clear");
let inputName = <HTMLInputElement>document.getElementById("preke_pavadinimas");
let inputPrice = <HTMLInputElement>document.getElementById("preke_kaina");
let inputAmount = <HTMLInputElement>document.getElementById("preke_kiekis") as HTMLInputElement; // galime gauti value su metodu - inputName.value;

console.log("BB", bendraInfo);

class Prekes {

    constructor(
        private _pavadinimas: string,
        private _kaina: number,
        private _kiekis: number
    ) { }

    get pavadinimas() { return this._pavadinimas; }
    get kaina() { return this._kaina; }
    get kainaSuPVM() { return this._kaina * 1.21; }
    get kiekis() { return this._kiekis; }
    // get kiekisB() { return this._kiekis; }

    set seTpavadinimas(vardasNew: string) { this._pavadinimas = vardasNew; }
    set seTkaina(newKaina: number) { this._kaina = newKaina; }
    set seTkainaSuPVM(newKainaPvm: number) { this._kaina = newKainaPvm * 1.21; }
    set seTkiekis(newKiekis: number) { this._kiekis = newKiekis; }
}
// DUOMENU ATVAIZDAVIMAS
// arrow funkcija ivestu(input laukuose) duomenu atvaizdavimui
let rodykPrekiuSarasa = () => {

    let tempBendraSuma = 0;
    let tempVisoPrekiu = 0;
    if (outputAtsakymas != null && bendraInfo != null) {

        outputAtsakymas.innerHTML = ''; // pries atvaizduodami prekiu sarasa, istrinam visa ankstesne info apie preke(-es) is DOM
        bendraInfo.innerHTML = ''; // pries atvaizduodami prekiu sarasa, istrinam visa ankstesne info apie preke(-es) is DOM



        tiekejas.forEach((preke, index) => { // is objekto formuojam prekiu sarasa su forEach

            tempBendraSuma += preke.kaina * preke.kiekis; // sumuojam
            tempVisoPrekiu += preke.kiekis; // sumuojam

            const div = document.createElement("div");
            div.setAttribute("id", (index).toString());
            div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");

            const p = document.createElement("p");


            const button = document.createElement("button");
            button.setAttribute("class", "btn btn-danger delete-item");
            button.innerHTML = " X " + preke.kiekis;

            p.innerHTML = " index: <strong>" + index + '<br>'
                + "</strong> Prekė: <strong>" + preke.pavadinimas.toUpperCase() + '<br>'
                + "</strong> Kaina: <strong>" + preke.kainaSuPVM.toFixed(2) + '</strong>€ <i >su PVM</i>, <strong>' + preke.kaina + '</strong>€ <i>be PVM</i><br>' //parseFloat(vykdom(cmToInch).toFixed(2)
                // + "</strong> Kaina su PVM: <strong>" + preke.kainaSuPVM + '</strong> € <br>' //parseFloat(vykdom(cmToInch).toFixed(2)
                + " Kiekis: <strong>" + Math.floor(preke.kiekis) + '</strong><br><hr>';

            div.append(p, button);

            outputAtsakymas?.appendChild(div); // outputAtsakymas.innerHTML = tmp; // atvaizdavimas DOM



            button.onclick = () => {
                console.log("Paspaude: ", preke.pavadinimas);
                deleteItem(index)

            }

        });
        console.log('baigiam rodyti tiekejo prekes');

        if (tempBendraSuma != 0 && bendraInfo != null) {

            const divBendraInfo = document.createElement("div");
            divBendraInfo.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
            const pBendraInfo = document.createElement("p");
            pBendraInfo.innerHTML = "Bendra prekių vertė: <br><strong>" + tempBendraSuma.toFixed(2) + "</strong>€ (be PVM), <strong> <br>"
                + (tempBendraSuma * 1.21).toFixed(2) + "</strong>€ (su PVM)";
            divBendraInfo.append(pBendraInfo);
            bendraInfo?.appendChild(divBendraInfo);


        }
        const divBendraInfo2 = document.createElement("div");
        divBendraInfo2.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        const pBendraInfo2 = document.createElement("p");
        pBendraInfo2.innerHTML = "Viso prekių: <strong>" + tempVisoPrekiu + "</strong>";
        divBendraInfo2.append(pBendraInfo2);
        bendraInfo?.appendChild(divBendraInfo2);


        const divBendraInfo1 = document.createElement("div");
        divBendraInfo1.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        const pBendraInfo1 = document.createElement("p");
        pBendraInfo1.innerHTML = "Viso skirtingų prekių: <strong>" + tiekejas.length + "</strong>";
        divBendraInfo1.append(pBendraInfo1);
        bendraInfo?.appendChild(divBendraInfo1);


    }
};

let tiekejas: Prekes[] = []; // deklaruojam tuscia masyva i kuri bus push'inami duomenys is pildymo formos


/*

DEMESIO !!!
DUOMENU atsisiuntimas is localStorage ir objekto(-u) suformavimas pagal class Prekes, bei objeto(-u), issaugojimas masyve - tiekejas[].

*/
// atsisiunciam issaugotus duomenis is localStorage
let jsonParse = localStorage.getItem('saugomLocalStorage');

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
            tiekejas.push(applyClass); // pushinam objektus sukonstruotus pagal class Prekes template'a i tiekejas[] masyva

        }
        );
        rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach) 
    };


/*

DEMESIO !!!
NAUJOS PREKES IVESTU DUOMENU PUSH(saugojimas) i masyva ir localStorage

*/
if (actionButton != null) { //butina patikrinti ar egzistuoja DOM elementai(mygtukas ir input laukai)
    actionButton.onclick = () => {
        if (inputName.value != '' && inputPrice.value.length != 0 && inputAmount.value.length != 0) { // tikriname ar visi input laukai uzpildyti
            tiekejas.push(new Prekes(inputName.value, inputPrice.valueAsNumber, inputAmount.valueAsNumber)); // push'inam ivestus duomenis i masyva - tiekejas[].
            rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach)
            localStorage.setItem('saugomLocalStorage', JSON.stringify(tiekejas));

            // isvalom input laukus po sekmingo duomenu issaugojimo
            inputName.value = '';
            inputPrice.value = '';
            inputAmount.value = '';
        }
        else { // pranesame apie neuzpildytus laukus
            alert("LAUKAI tusti")
        }

    }
}
// completely clear data from localstorage
if (clearStorageButton != null && outputAtsakymas != null) { //butina patikrinti ar egzistuoja DOM elementai(mygtukas ir input laukai)
    clearStorageButton.onclick = () => {

        tiekejas = [];
        window.localStorage.removeItem('saugomLocalStorage'); // istrinam duomenis is localStorage
        console.log('trinam', tiekejas, window.localStorage.getItem('saugomLocalStorage'));
        rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach)
    }
}
console.log(tiekejas, inputPrice, inputAmount)



// let buttonDeleteItem = document.querySelectorAll(".delete-item");


// for (const button of buttonDeleteItem) {
//     button.addEventListener('click', function (event) {
//         //...
//         console.log(button)
//     })
// }
// buttonDeleteItem.forEach((button, index) => {


//     button.onclick = (index: number) => {
//         tiekejas.splice(index, 1);
//     };


// });
// console.log('Delete item: ', buttonDeleteItem)


let deleteItem = (index: number) => {
    tiekejas.splice(index, 1);
    localStorage.setItem('saugomLocalStorage', JSON.stringify(tiekejas));
    console.log("tiekejo data po istrinimo: ", tiekejas)
    rodykPrekiuSarasa(); // atvaizduojam duomenis, kuriuos push'inom i masyva (su forEach)'

}
// deleteItem(0);


// 1. Select the div element using the id property
// const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
// const p = document.createElement("p");
// 3. Add the text content
// p.textContent = ;
// 4. Append the p element to the div element
// outputAtsakymas?.appendChild(p);

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
console.log(someArray)