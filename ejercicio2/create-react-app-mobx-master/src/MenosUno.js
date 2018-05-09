import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class MenosUno extends Component{
    render(){
        return(
            //<button onClick={function(){VarPrincipalData.aumentarNumero()}}>Aumentar</button>
            <button onClick={()=>VarPrincipalData.disminuirNumero()}>Disminuir</button>
        )
    }
}

export default MenosUno;