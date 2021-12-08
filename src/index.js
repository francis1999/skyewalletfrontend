import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';

axios.defaults.baseURL = 'https://skyewallet.herokuapp.com/api/v1/';


ReactDOM.render(
  <BrowserRouter>
    <App />

  </BrowserRouter>,
  document.getElementById('root')
);


