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


//
// funkcija, kuria iskvieciant privaloma nurodyti firstName ir lastName,
// bet iskvietimo metu galime nurodyti ir kitus objekto propercius, tam naudojame <T extends ... { objekto properciai, kurie BUTINI}


// let vardasPavarde = (obj: { firstName: string; lastName: string }) => { // nurodome, kad i funkcijos parametrus gali patekti tik objektas sudarytas is firstName ir lastName
let vardasPavarde = <T extends { firstName: string; lastName: string }>(obj: T) => { // nurodome, kad iskviesdami funkcija privalome nurodyti varda ir pavarde, bei galime i objekta perduoti papildomus argumentus pvz. age: 6
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

let l4 = vardasPavarde({ firstName: 'Bob', lastName: 'Bundy' }); // sukuriame nauja objekta is vardo ir pavardes
console.log('Vardas ir pavarde \n', l4.fullName);


let l5 = vardasPavarde({ another: 14, firstName: 'Darius', lastName: 'Gujus', age: 45, height: 180 }); // sukuriame nauja objekta is vardo, pavardes, amziaus ir tt.
console.log('Vardas ir pavarde, amzius \n', l5.fullName, l5.age, l5.height);


/////////////////////////////////////////////////////////////////

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

laipsniai.forEach(d => {
    console.log(d);
})

vardai.sort().forEach(a => {
    console.log(a);
})

console.log(laipsniai);
console.log(vardai.sort());


/*////////////////////////////////////////////////////////

generic class

generic interface

*/

interface genericPraletimas {

    ak: Number,
    tabelis: Number,

}

class Darbuotojas<T, Y>{
    public tmp: T;
    constructor(
        public vardas: T,
        public id: Y
    ) { this.tmp = this.vardas; }


    public atvaizduoti() { return this.vardas + ' ' + this.id + ' \n'; }
}

let zigmas = new Darbuotojas('Zigmas', 345633);
let vidas = new Darbuotojas('Vidas', 'LT-5443345-02');
let vida = new Darbuotojas<string, genericPraletimas>('zizu', { ak: 122221, tabelis: 3342342 });

vida.id.tabelis

console.log(zigmas.atvaizduoti(), vidas.atvaizduoti(), vida.id.ak);