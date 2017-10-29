import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

var destination = document.querySelector('#container');

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/stuff" component={Stuff} />
      <Route path="/contact" component={Contact} />
    </App>
  </Router>,
  destination
);
