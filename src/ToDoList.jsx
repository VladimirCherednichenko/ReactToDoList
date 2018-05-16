import React, { Component } from 'react';
import Task from './TaskComponent'
import './TaskCSS.css'

export default class ToDoList extends Component {
    constructor(props)
    {
        super(props)
        this.dellItemCallBack = props.dellItemCallBack
        this.items = props.items
    }

    componentWillReceiveProps(nextProps)
    {
        this.items = nextProps.items;
        var bufer = "";
        this.items.map(item => {
            bufer += item.text + ", ";
        })
        console.log(this.items);
    }

    render() {
        console.log("RENDER! ");
        return (
            <div>
                <div>
                    {
                        this.items.map((item, index) => (
                            <Task key={index} itemId = {item.id} itemText = {item.text} dellItemCallBack = {this.dellItemCallBack}></Task>

                            )
                        )
                    }
                </div>
            </div>
        );
    }


}