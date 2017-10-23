import React, { Component } from 'react';


class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  // Turning the list of todo items into JSX elements
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
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
