import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './styles/bulma.css';
import './styles/font-awesome.css';

ReactDOM.render(<Map />, document.getElementById('root'));
registerServiceWorker();
