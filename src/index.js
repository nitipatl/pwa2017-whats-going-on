import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './styles/bulma.css';
import './styles/font-awesome.css';
import Login from './Login';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
