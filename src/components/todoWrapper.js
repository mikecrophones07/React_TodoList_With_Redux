import React, { Component } from "react";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";

export default class TodoWrapper extends Component {
    render(){
        return (
            <div>
                <TodoInput/>
                <TodoItem/>
            </div>
        )
    }
}