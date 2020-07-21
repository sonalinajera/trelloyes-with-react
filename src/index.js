import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store.js'
import './app.css'
import './card.css'
import './list.css'

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));