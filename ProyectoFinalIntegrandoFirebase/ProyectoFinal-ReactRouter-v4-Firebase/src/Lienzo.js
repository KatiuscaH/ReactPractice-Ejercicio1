import React, { Component } from 'react'
import Platillos from './Platillos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Lienzo extends Component {
    render() {
        console.log(this.props.location);
        console.log(this.props.match);
        console.log(this.props.history);
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2> Tienda Name </h2>
                </div>

                <div>
                    <div>
                        <ul className="nav nav-pills ListMargin">
                            <li class="nav-item">
                                <Link to="/platillos">Comidas</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="bebidas">Bebidas</Link>
                            </li>
                        </ul>
                        {/*
                            <Link to="/bebidas">Bebidas</Link>
                            <Link to="/platillos">Platillos</Link>
                            */}
                    </div>
                    <div>
                        <Route path="/bebidas" component={Bebidas} />
                        <Route path="/platillos" component={Platillos} />
                    </div>
                </div>

                <Pedidos />

            </div>
        )
    }
}

export default Lienzo;