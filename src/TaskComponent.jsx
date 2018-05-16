import React, { Component } from 'react';
import "./TaskCSS.css"
export default class ToDoList extends Component {
    constructor(props)
    {
        super(props)
        this.itemId = props.itemId;
        this.itemText = props.itemText;
        this.dellItemCallBack = props.dellItemCallBack;
    }

    delBtnClick = () =>
    {
        this.dellItemCallBack(this.itemId);
    }

    render()
    {
        debugger
        return(
            <div className="container" color = "black">

                <button className="delButton" onClick={this.delBtnClick}>{"X"}</button>
                <div className="taskText">{this.itemText}</div>


            </div>
        )
    }

}