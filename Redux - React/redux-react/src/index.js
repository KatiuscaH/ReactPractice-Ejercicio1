import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';//siempre para trabajar con redux
import { Provider } from 'react-redux'; //al igual con react redux

const reducer = (state, action) => {
    var newState = Object.assign({}, state);//copia del estado anterior

    if (action.type === 'AUM') {
        newState.cantidad = state.cantidad + 1;
       // console.log("Dentro del reducer con el action.type = aum");
        return newState;
     }else{

     if (action.type === 'DIS') {
        newState.cantidad = state.cantidad - 1;
       // console.log("Dentro del reducer con el action.type = aum");
        return newState;
     }
    }
    return state;
}

const state = {
    cantidad: 2
}

const store = createStore(reducer, state);

ReactDOM.render(
    //1. Implementar Provider
    //dandole store = {store} le da acceso a los componentes de usar el store
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
