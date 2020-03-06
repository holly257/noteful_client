import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import LoadError from './Errors/LoadError';

ReactDOM.render(<BrowserRouter><LoadError><App store={store}/></LoadError></BrowserRouter>, document.getElementById('root'));