import React, { Component } from 'react'
import './Platillos.css';
import logo from './logo.svg';
import VarTiendaController from './tiendaController';
import Ordenar from './Ordenar';

class Platillos extends Component {
    render() {
        //meter los platillos
        let platillos_div = [];
        const llenar_array_platillos_div = VarTiendaController.
            platillos.forEach((value, index) => (
                platillos_div.push(//obligatorio la key
                    <div className="list-group-item" key={index}>
                        <div className="panel-body">
                            <img role="presentation" src={logo} className="ImagenPlatillo"/>
                            <h2 className="TitlePlatillo">{value.nombre}</h2>
                            <div className="DescripcionPlatillo">{value.descripcion}</div>
                            <Ordenar precio={value.precio} indice={index}
                            hacerPedido={(indice_d, evento_d)=>
                            {VarTiendaController.ponerEnLaOrden(indice_d, evento_d)}}/>
                </div>
                        </div>
                        )
                    )
                    )
            
                    return (
            <div className="container col-md-6">
                            <div>
                                <div className="panel panel-primary">
                                    <div className="list-group Platillo-Menu">
                                        {platillos_div}

                                    </div>

                                </div>

                            </div>
                        </div>
                        )
                    }
                }
                
export default Platillos;