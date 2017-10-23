import React, { Component } from 'react';
import TodoItems from './TodoItems.js';


class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    // Store the current value of items state object
    var itemArray = this.state.items;

    // If input element has some text entered
    if (this._inputElement.value !== "") {

      // Add an object that contain both the entered text and a unique key to
      // the itemArray
      itemArray.unshift(
        {
         text: this._inputElement.value,
         key: Date.now()
        }
      )

      // Set the state's items property to the value of itemArray
      this.setState({
        items: itemArray
      });

      // Clear the value of itemArray to make room for the next todo item
      this._inputElement.value = "";

      console.log(itemArray);

      // Override submit event's default behavior, this way the page does not
      // reload when user submits the form
      e.preventDefault();
    }
  }

  // We use refs to reading the value from the input DOM element
  // Pass items array as a prop to TodoItems
  render() {
    return (
      <div className="header">
        <form onSubmit={this.addItem}>
          <input
            ref = { (a) => this._inputElement = a}
            placeholder="enter task">
          </input>
          <button type="Submit">add</button>
        </form>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
};

export default TodoList;
