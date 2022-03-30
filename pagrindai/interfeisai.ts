// interfeisai

interface Asmuo { //interfacesas skirtas atributu sarasui
    vardas: string,
    amzius: number,
    telefonas?: string, // ? reiskia, kad atributas yra optional
}

let apsilankymas = (el: Asmuo) => {
    console.log("Lankytojas", el.vardas + ", amzius: " + el.amzius, "Telefonas w:", el.telefonas);

}

// let lankytojas = {
let lankytojas: Asmuo = { // objektas - lankytojas, objekto tipas - Asmuo. Jeigu nenurodome objekto tipo, nematysime praleisto atributo klaidos
    vardas: "Aurelijus",
    amzius: 41,
    telefonas: "8 616 42468"
}
apsilankymas(lankytojas);
