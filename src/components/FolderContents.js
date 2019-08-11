import React, { Component } from "react";

export default class FolderContents extends Component {
  render() {
    return (
      <ul>
        {this.props.files.map(file => {
          return (
            <li key={file.name}>
              name: {file.name} - type: {file.type} - added: {file.added}
            </li>
          );
        })}
      </ul>
    );
  }
}
