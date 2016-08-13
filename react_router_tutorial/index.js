import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';

const root = document.querySelector('#app');

ReactDOM.render (
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/repos" component={Repos} />
      <Route path="/about" component={About} />
    </Router>,
    root
);
