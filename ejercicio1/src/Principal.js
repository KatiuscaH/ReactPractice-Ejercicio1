import React, { Component } from 'react';
import Segundo from './Segundo';

class Principal extends Component{
    render(){
        return(
            <div>
                <h2>Hello from Component</h2>
                <h2>By create-react-app</h2>
                <Segundo/>
            </div>
        )
    }
}

export default Principal;