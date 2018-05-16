import React, { Component } from 'react';

export default class ToDoList extends Component {
    constructor(props)
    {
        super(props)
        this.itemId = props.itemId
        this.itemText = props.itemText
    }


    render()
    {
        return(
            <li key={this.itemId}>{this.itemText}</li>
        )
    }

}