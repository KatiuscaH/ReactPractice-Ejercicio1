import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from './Lienzo';
/*import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Platillos from './Platillos';

//Rutas!
/*const direcciones = (
<Router history={ browserHistory }>
  <Route path="/" component={Lienzo}>
  <IndexRoute component={Platillos}></IndexRoute>
  </Route>
</Router>
);
*/
ReactDOM.render(
  <Lienzo/>,
  document.getElementById('root')
);
