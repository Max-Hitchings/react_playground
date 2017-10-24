import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';


class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // Create an array that contains all items except the one user is removing.
  // To do this we are passing the key from the clicked item here, and we check
  // this key against all of the items we are storing via the filter method.
  // The filteredItems array is then set as a new items property on the state
  // object.
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })
  }

  addItem(e) {
    var itemArray = this.state.items;

    // If input element has some text entered
    if (this._inputElement.value !== "") {

      // Store the current value of items state with an object that contains
      // both the entered text and a unique key
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
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref = { (a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button type="Submit">add</button>
          </form>
          <TodoItems
            entries={this.state.items}
            delete={this.deleteItem} />
        </div>
      </div>
    );
  }
};

export default TodoList;
