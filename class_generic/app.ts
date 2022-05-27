// parametrizuotos(generic) funkcijos



// generic arrow function, kuri:
let lastItem = <T>(x: T[]) => {
    return x[x.length - x.length] //grazins pirma reiksme masyve
    // return x[x.length - 1] // grazins paskutine reiksme masyve
}
let l = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(l, lastItem(l));

let l1 = ['Jonas', 'Antanas', 'Gintas'];
console.log(lastItem<string>(l1) // iskviedami funkcija galime nurodyti koks duomenu tipas patenka i funkcija naudodami <string> 
);





// generic arrow function, kuri:
let sujungiam = <T, Y>(x: T, y: Y): [T, Y] => { // funkcija kurios tipas <T,Y> yra generic, su dviem parametrais (x:T,y:Y), grazina masyva :[T,Y]
    return [x, y] //grazins masyva sudaryta is reiksmiu, kurias nurodysime iskviesdami funkcija
}

let l2 = sujungiam('Simas', 9); // galime nenurodyti argumentu('simas', 9) tipo, TypeScript priskirs tipus savarankiskai
let l3 = sujungiam<string | null, number>('', 9); // galime nurodyti konkretu argumento tipa, kuris gali buti string arba null
console.log('L2', l2, sujungiam(9, 'Gedas'));


////////////////////////////////////////////////////////////////

let laipsniai = [5, 6, 7, 8, 9, 10];
let vardai = ['Jonas', 'Petras', 'Bronius'];

function pridetiLaipsni<T>(masyvas: T[], reiksme: T) {
    const naujasMasyvas = [reiksme, ...masyvas];
    return naujasMasyvas;
}


laipsniai = pridetiLaipsni(laipsniai, 1);
laipsniai = pridetiLaipsni(laipsniai, 3);
laipsniai = pridetiLaipsni(laipsniai, 4);


vardai = pridetiLaipsni<string>(vardai, 'Gedas');

// sort funkcija rasome po pridetiLaipsni
laipsniai.sort(function (a, b) {
    return a - b;
});


console.log(laipsniai);
console.log(vardai.sort());