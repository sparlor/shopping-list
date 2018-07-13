import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import List from './components/List';
class App extends Component {
  state = {
    items: [
      'Milk'
      ,'Bread'
      ,'Fruit'
    ]
    
  };
  
  addItem = (event) => {
    event.preventDefault();
    const {items} = this.state;
    const newItem = this.newItem.value;

    this.setState({
      items: [...this.state.items, newItem]
    })

    this.addForm.reset();
  }


  render() {



    return (
    <div className = "shoppingApp">
      {/*<h1>Shopping List App </h1>*/}
        <form className="form-inline" ref = {input => this.addForm = input} onSubmit = {(event) => {this.addItem(event)}}>
          <div className = "form-group">
            <label className = "sr-only" htmlFor = "newItemInput">Add Item</label>
            <input ref = {input => this.newItem = input} type = "text" placeHolder = "Bread" className = "form-control" id = "newInputItem"/>
          </div>
          <button type = "submit" className = "btn btn-primary">Add</button>
          </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
          {
              this.state.items.map(item => {
              return (
              <tr key = {item}>
              <th scope="row">1</th>
              <td>{item}</td>
              <td>button</td>
            </tr>
              )})
          }
          </tbody>
        </table>

      {/*<button id='button' onClick = {addFunction}>Add</button>*/}
    </div>
    );
  }
}

export default App;