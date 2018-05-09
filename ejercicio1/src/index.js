import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Principal from './Principal';

ReactDOM.render(<Principal />, document.getElementById('root'));
registerServiceWorker();
