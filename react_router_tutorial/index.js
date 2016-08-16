import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './modules/routes';

const root = document.querySelector('#app');

ReactDOM.render (
    <Router routes={routes} history={browserHistory} /> ,
    root
);
