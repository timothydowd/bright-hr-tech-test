import React, { Component } from "react";
import data from "./data/data.json";
import Item from './components/Item'
import SortByDropDown from './components/SortByDropdown'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  handleSortByChange(event){
    console.log('in handleSortByChange: ', event.target.value)
  }

  render() {
    return (
      <div>
        <SortByDropDown handleSortByChange={this.handleSortByChange}/>
        <ul>
        {this.state.data.map(item => {
          return (
            <li key={item.name}> <Item item={item}/> </li>
          )
        })}
      </ul>
      </div>
      
    );
  }
}


