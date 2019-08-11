import React, { Component } from 'react'
import data from './data/data.json'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <ul>
        {this.state.data.map(item => {
          return(
            <li key={item.name}>name: {item.name} - type: {item.type} - added: {item.added}</li>
          )
        })}
        
      </ul>
    )
  }
}

