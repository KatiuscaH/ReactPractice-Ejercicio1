import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
//conect nos permite acceder al STATE y hacer DISPATCH de 
//ACTION (acciones) y ACTION CREATOR

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.props.informacion}
        <br/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
//Ingresa como props a nuestro Component tanto el STATE
//como los DISPATCH

// internamente hace una suscripcion y getState
//por lo que constantemente en caso de un cambio en el
//STATE se actualiza o se ejecuta nuevamente
//es una funcion con parametro de state
const mapStateToProps = (state)=>{
  return{
    informacion: state.cantidad
  }
}
//puede ser una funcion o un objeto.
//es mejor usar la funcion
const mapDispatchToProps = {
  aumentar: ()=>{return {type: 'AUM'}},
  disminuir: ()=>{return {type: 'DIS'}}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
