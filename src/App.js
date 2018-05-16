import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './ToDoList'
import ComponentRow from './TaskComponent'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.myInput = React.createRef();
    }

    dellItem = (idToDel) =>
    {
         var buferItems = this.state.items;

         for (var i = 0; i < buferItems.length; i++ ) {
             if (buferItems[i].id === idToDel) {
                 buferItems.splice(i, 1);
                 break;
             }
         }
         this.setState({ items: buferItems });
    }

    // handleChange(e) {
    //     this.setState({ text: e.target.value });
    // }

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

    render() {
        console.log("render")
        return (

            <div>

                <div>
                    {
                    this.state.items.map((item, index) => (

                        <ComponentRow key={index} itemId = {item.id} itemText = {item.text} dellItemCallBack = {this.dellItem}> </ComponentRow>
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
