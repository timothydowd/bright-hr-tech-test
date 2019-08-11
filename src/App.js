import React, { Component } from "react";
import data from "./data/data.json";
import Item from './components/Item'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  

  render() {
    return (
      <ul>
        {this.state.data.map(item => {
          return (
            <li key={item.name}> <Item item={item}/> </li>
          )
        })}
      </ul>
    );
  }
}


