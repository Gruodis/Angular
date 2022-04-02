export class Prekes {

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