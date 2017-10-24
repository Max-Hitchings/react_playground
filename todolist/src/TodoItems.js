import React, { Component } from 'react';


class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  // Turning the list of todo items into JSX elements
  // Listen to the click event and associate it with the "delete" event handler
  createTasks(item) {
    return (
      <li
        onClick={ (e) => this.delete(item.key, e) }
        key={item.key}
      >
        {item.text}
      </li>
    )
  }

  // Call another "delete" function passed in to this component via props
  delete(key) {
    this.props.delete(key);
  }

  render() {

    // Take the list of todo items (passed in as entries)
    var todoEntries = this.props.entries;

    // It will store an array of li elements containing the content to print
    // We do that by calling map on our items and relying on the createTasks
    // function
    var listItems = todoEntries.map(this.createTasks);

    // Display the list of items
    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }
}

export default TodoItems;
