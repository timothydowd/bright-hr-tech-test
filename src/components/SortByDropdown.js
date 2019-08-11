import React, { Component } from 'react'

export default class SortByDropdown extends Component {
    render() {
        return (
            <select onChange={this.props.handleSortByChange}>
                <option value='' disabled selected>sort by</option>
                <option value='name'>name</option>
                <option value='type'>type</option>
                <option value='added'>added</option>
            </select>
        )
    }
}
