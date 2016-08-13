import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Router tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
}

export default App;
