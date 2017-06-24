import React from 'react';
import ReactDOM from 'react-dom';
import PinMap from './PinMap';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './styles/bulma.css';
import './styles/font-awesome.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
