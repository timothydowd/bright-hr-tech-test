import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleClickFolderButton(){
        console.log('click open folder')
      }

    render() {
        if (this.props.item.type === "folder") {
            return (
              <div key={this.props.item.name}>
                name: {this.props.item.name} - type: {this.props.item.type}{" "}
                <button onClick={ this.handleClickFolderButton }>open/close folder</button>
              </div>
            );
          } else {
            return (
              <div key={this.props.item.name}>
                name: {this.props.item.name} - type: {this.props.item.type} - added: {this.props.item.added}
              </div>
            );
          }
    }
}
