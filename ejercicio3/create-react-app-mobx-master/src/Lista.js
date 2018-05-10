import React, { Component } from 'react';
import VarListaData from './ListaData';
import { observer } from 'mobx-react';

class Lista extends Component {

    enviarTarea(evento) {
        if (evento.which === 13) {
            VarListaData.agregarTarea(evento.target.value);
            evento.target.value = "";
        }

    }



    render() {
        //para iterar la lista de tareas
        let listaDiv = [];
        const agregarDiv = VarListaData.tareas.forEach(
                (value, index) =>
                    //la key es para saber el index de cada elemento
                    //de la lista
                    //el onclick es para eliminar dando clic sobre la nota
                    (listaDiv.push(<li className="list-group-item" onClick={() => { VarListaData.eliminarTarea(index) }} key={index}>{value}</li>))
            );
        return (
            <div className="container">
                <h2>Listar</h2>
               
                <input onKeyPress={this.enviarTarea.bind(this)} />
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group">
                            {listaDiv}

                        </ul>

                    </div>

                </div>
            </div>
        )
    }
}

export default observer(Lista);