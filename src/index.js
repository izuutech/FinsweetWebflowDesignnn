import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/Home.css';
import './css/NavBar.css';
import './css/Footer.css';
import './css/Pricing.css';
import './css/Faq.css';
import './font-awesome/fontawesome-free-5.13.0-web/css/all.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

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
