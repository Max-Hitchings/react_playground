import React, { Component } from 'react';
import './MenuButton.css';


class MenuButton extends React.Component {
  render() {
    return (
      <div>
        <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
      </div>
    );
  }
}

export default MenuButton;
