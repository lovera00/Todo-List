import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      list: [],
    };
  };
  render() {
    return (
      <div className="App">
        <div>Todo list</div>
        <input type="text" onChange={(e) => this.setState({ newItem: e.target.value })} />
        <button onClick={() => this.setState({ list: [...this.state.list, this.state.newItem], newItem: '' })}>Add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
