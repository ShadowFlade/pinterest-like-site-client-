import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
import './scss/custom/custom.scss';
import './style.scss';
const root = document.querySelector('#root');
// @ts-ignore
ReactDOM.createRoot(root).render(<App />);
