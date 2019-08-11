import React, { Component } from "react";
import data from "./data/data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  handleClickFolderButton(){
    console.log('click open folder')
  }

  render() {
    return (
      <ul>
        {this.state.data.map(item => {
          if (item.type === "folder") {
            return (
              <li key={item.name}>
                name: {item.name} - type: {item.type}{" "}
                <button onClick={ this.handleClickFolderButton }>open/close folder</button>
              </li>
            );
          } else {
            return (
              <li key={item.name}>
                name: {item.name} - type: {item.type} - added: {item.added}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}


