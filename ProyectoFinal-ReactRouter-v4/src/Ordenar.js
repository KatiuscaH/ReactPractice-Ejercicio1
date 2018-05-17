import React, { Component } from 'react'

class Ordenar extends Component{

    actualizarCantidad(evento){
        this.props.hacerPedido(this.props.indice, evento.target.value);
 }


    render(){
        return(
            <div>
                <br/>
                <label>Cantidad: </label>
                <input onChange={this.actualizarCantidad.bind(this)} type="number" min="0" max="20"/>
                <label className="EspacioPlatillo">Precio: {this.props.precio} </label>
            </div>
        )
    }
}

export default Ordenar;