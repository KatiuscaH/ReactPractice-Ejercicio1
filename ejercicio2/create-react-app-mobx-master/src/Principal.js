import React, { Component } from 'react';
import { observer } from 'mobx-react'
import VarPrincipalData from './PrincipalData';
import MasUno from './MasUno';
import MenosUno from './MenosUno';

class Principal extends Component {
    render() {
        return (
            <div>
                <h2>Hello From Principal React + Mobx</h2>
                <h2>{VarPrincipalData.numero}</h2>
                <MasUno/>
                <MenosUno/>
            </div>
        )
    }
}
/**
 * Para poder tener control del cambio se debe crear
 * como observador para que cuando haya un cambio este 
 * se muestre donde se esta llamando
 */
export default observer(Principal);