import React, { Component } from "react";

export default class TodoInput extends Component {
    render(){
        return (
            <div>
                <p>To Do List</p>
                <input type="text" ref="valueInput"/>
                <button onClick={this.regenerateList}>Add</button>
            </div>
        )
    }
}