"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prekes = void 0;
class Prekes {
    constructor(_pavadinimas, _kaina, _kiekis) {
        this._pavadinimas = _pavadinimas;
        this._kaina = _kaina;
        this._kiekis = _kiekis;
    }
    get pavadinimas() { return this._pavadinimas; }
    get kaina() { return this._kaina; }
    get kainaSuPVM() { return this._kaina * 1.21; }
    get kiekis() { return this._kiekis; }
    // get kiekisB() { return this._kiekis; }
    set seTpavadinimas(vardasNew) { this._pavadinimas = vardasNew; }
    set seTkaina(newKaina) { this._kaina = newKaina; }
    set seTkainaSuPVM(newKainaPvm) { this._kaina = newKainaPvm * 1.21; }
    set seTkiekis(newKiekis) { this._kiekis = newKiekis; }
}
exports.Prekes = Prekes;
