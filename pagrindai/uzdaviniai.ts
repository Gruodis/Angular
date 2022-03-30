// faktorialas

let faktorialas = (x: number): number => {

    let rezult = 1;

    for (let i = 1; i <= x; i++) {
        rezult *= i;

    }
    return rezult;
}
console.log(faktorialas(5));
console.log(faktorialas(2));

// dvieju kintamuju bendras didziausias daliklis

let bdd = (x: number, y: number): number => {

    let rezult: number;
    for (let i = x; i > 0; i--) {
        console.log('bdd 1', i);
        if (x % i === 0 && y % i === 0) {

            return i;
        }


    }
}
console.log('bdd ', bdd(24, 15));

interface Koordinates {
    x: number;
    y: number;
}

let darom = (p: Koordinates) => {
    return Math.sqrt(p.x * p.x + p.y * p.y);

}

// let geometrija = {
let geometrija: Koordinates = { // objektas - lankytojas, objekto tipas - Asmuo. Jeigu nenurodome objekto tipo, nematysime praleisto atributo klaidos
    x: 5,
    y: 5
}
console.log("geometrija", darom(geometrija));