import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Reset} from './styles/resetCSS'
import {Base} from './styles/globall';




ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

