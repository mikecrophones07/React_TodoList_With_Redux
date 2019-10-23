import React, { Component } from "react";
import ListView from "./listView";

export default class ViewGroup extends Component {    
    regenerateList = () =>{
        // fetch("http://localhost:7788/api/todos", {mode: 'cors'}).then(res => res.json()).then(res => console.log(res))
        this.props.addTodoList(this.refs.valueInput.value, "actives");
        
    }

    render(){
        return (
            <div>
                <p>To Do List</p>
                <input type="text" ref="valueInput"/>
                <button onClick={this.regenerateList}>Add</button>
                <ListView items = {this.props.todoList}/>
            </div>
        )
    }
}
