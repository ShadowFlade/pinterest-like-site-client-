import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
const root = document.querySelector('#root');
// @ts-ignore
ReactDOM.createRoot(root).render(<App />);
