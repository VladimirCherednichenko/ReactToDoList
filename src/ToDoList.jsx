import React, { Component } from 'react';
import Task from './TaskComponent'

export default class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }


}