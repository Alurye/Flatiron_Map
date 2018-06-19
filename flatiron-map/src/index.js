import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Leaflet from 'leaflet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
