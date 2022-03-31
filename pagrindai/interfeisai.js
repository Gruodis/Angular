"use strict";
// interfeisai
let apsilankymas = (el) => {
    console.log("Lankytojas", el.vardas + ", amzius: " + el.amzius, "Telefonas w:", el.telefonas);
};
// let lankytojas = {
let lankytojas = {
    vardas: "Aurelijus",
    amzius: 41,
    telefonas: "8 616 42468"
};
apsilankymas(lankytojas);
