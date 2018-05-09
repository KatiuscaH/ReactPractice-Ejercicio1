/**
 * Será una clase de Javascript para integrar los elementos de Mobx
 */

import { extendObservable } from 'mobx';

class PrincipalData {
    /**
     * Toma dos valores, this y el(los) objeto(s) que será(n)
     * observado(s) 
     */
    constructor(){
        extendObservable(this,
        {numero: 0})
    }

    aumentarNumero(){
        this.numero = this.numero + 1;
    }

    disminuirNumero(){
        this.numero = this.numero - 1;
    }
}


var VarPrincipalData = new PrincipalData;
export default VarPrincipalData;