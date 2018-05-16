import React, { Component } from 'react';
import './App.css';
import './TaskCSS.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.myInput = React.createRef();
    }


    addTask = () => {
        console.log(this.myInput.current.value);




        const newItem = {
            text: this.myInput.current.value,
            id: Date.now()
         };


        this.setState(prevState => ({
           items: this.items = this.state.items.concat(newItem)
        }));
        console.log(this.state.items);
    }

    delBtnClick = (idToDel) =>
    {
        return function dellItem()
        {
            var buferItems = this.state.items;

            for (var i = 0; i < buferItems.length; i++ ) {
                if (buferItems[i].id === idToDel) {
                    buferItems.splice(i, 1);
                    break;
                }
            }
            this.setState({ items: buferItems });
        }.bind(this);
    }

    styleDecor = (event) => {
        console.log(event.target);
        if(event.target.style.textDecoration == '')
        {
            event.target.style.textDecoration = 'line-through';
        }
        else
        {
            event.target.style.textDecoration = '';
        }
    }

    render() {
        console.log("render")
        return (

            <div>
                <h1>
                    ToDoList
                </h1>

                <h3>
                    Needs to be done:
                </h3>
                <div>
                    {
                    this.state.items.map((item, index) => (

                        <div className="container">
                            <button className="delButton" onClick={this.delBtnClick(item.id)}>X</button>
                            <p className="taskText" onClick={this.styleDecor}>{item.text}</p>
                        </div>
                    ))
                    }
                </div>
                <input type="text" ref={this.myInput} />
                <button onClick={this.addTask}>AddTask</button>
            </div>
        );
    }
}

export default App;
