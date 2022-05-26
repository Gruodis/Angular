"use strict";
// parametrizuotos(generic) funkcijos
let laipsniai = [5, 6, 7, 8, 9, 10];
let vardai = ['Jonas', 'Petras', 'Bronius'];
function pridetiLaipsni(masyvas, reiksme) {
    const naujasMasyvas = [reiksme, ...masyvas];
    return naujasMasyvas;
}
laipsniai = pridetiLaipsni(laipsniai, 1);
laipsniai = pridetiLaipsni(laipsniai, 3);
laipsniai = pridetiLaipsni(laipsniai, 4);
vardai = pridetiLaipsni(vardai, 'Gedas');
// sort funkcija rasome po pridetiLaipsni
laipsniai.sort(function (a, b) {
    return a - b;
});
console.log(laipsniai);
console.log(vardai.sort());
