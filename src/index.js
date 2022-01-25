import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Jeu from './Game.js';
import APropos from './pages/aPropos';
import Landing from './pages/Landing';
import Login from './pages/login';
import AircraftCarrier from './ships/AircraftCarrier';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
