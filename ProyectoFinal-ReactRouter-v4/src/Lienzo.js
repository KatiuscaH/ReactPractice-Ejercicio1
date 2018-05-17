import React, { Component } from 'react'
import Platillos from './Platillos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Lienzo extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2> Tienda Name </h2>
                </div>

                <BrowserRouter>
                    <div>
                        <div>
                            <Link to="/bebidas">Bebidas</Link>
                            <Link to="/platillos">Platillos</Link>
                        </div>
                        <div>
                            <Route path="/bebidas" component={Bebidas} />
                            <Route path="/platillos" component={Platillos} />
                        </div>
                    </div>
                </BrowserRouter>
                <Pedidos />

            </div>
        )
    }
}

export default Lienzo;