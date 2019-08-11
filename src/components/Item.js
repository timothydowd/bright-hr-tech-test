import React, { Component } from 'react'
import FolderContents from './FolderContents'

export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            folderOpen: false
        }
    }

    toggleFolder = () => {
        console.log('click open folder')
       
        const oppositeBoolean = !this.state.folderOpen
        console.log(oppositeBoolean)
        this.setState({folderOpen: oppositeBoolean})
      }

    render() {
        if (this.props.item.type === "folder") {
            return (
              <div key={this.props.item.name}>
                name: {this.props.item.name} - type: {this.props.item.type}{" "}
                <button onClick={ this.toggleFolder }>open/close folder</button>
                {this.state.folderOpen && <FolderContents files={this.props.item.files}/>}
                
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
