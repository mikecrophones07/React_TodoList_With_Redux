import React from 'react';
import ListView from "../ListView/ListView";

class ViewGroup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCount: this.props.defaultListCount,
            inputValue: ""
        }
    }

    renderList = () => {
        return Array.apply(null, {length: this.state.listCount}).map(element => {
            alert(this.state.inputValue)
            return (
                <ListView listItem = {this.state.inputValue}/>
            )
        })
    }

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    regenerateList = () =>{
        this.setState({listCount: this.state.listCount + 1})
    }

    render(){
        let listCounter = this.renderList();
        return (
            <div>
                <p>To Do List</p>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.regenerateList}>Add</button>
                {listCounter}
            </div>
        )
    }
}

export default ViewGroup;