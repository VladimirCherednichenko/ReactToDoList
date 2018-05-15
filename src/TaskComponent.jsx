import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import StartBtn from './PlayButton'
import ConteinerBtns from './ConteinerBtn'
import TimeLabel from './TimeLabel'

export default class TaskComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            nameOfTask:props.nameOfTask
        }

        this.callBackAddtask = props.callBackAddTask
    }
}