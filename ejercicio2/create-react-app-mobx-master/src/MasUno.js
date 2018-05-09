import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class MasUno extends Component{
    render(){
        return(
            //<button onClick={function(){VarPrincipalData.aumentarNumero()}}>Aumentar</button>
            <button onClick={()=>VarPrincipalData.aumentarNumero()}>Aumentar</button>
        )
    }
}

export default MasUno;