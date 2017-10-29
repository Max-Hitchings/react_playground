import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff" activeClassName="active">Stuff</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
