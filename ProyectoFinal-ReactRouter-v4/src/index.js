import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from './Lienzo';
import { BrowserRouter, Route } from 'react-router-dom';

const RouterDeLienzo = (
  <BrowserRouter>
    <Route path="/" component={Lienzo}/>
  </BrowserRouter>
);

ReactDOM.render(
  RouterDeLienzo,
  document.getElementById('root')
);
