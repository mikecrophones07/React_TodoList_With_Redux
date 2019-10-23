import React from 'react';

class ListView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: this.props.listItem,
            isChecked: false
        }
    }

    handleCheckAction = (event) =>{
        if(this.state.isChecked){
            this.setState({isChecked: false})
        }
        else{
            this.setState({isChecked: true})
        }
    }

    renderList = () => {
        if(this.state.isChecked){
            return (
                <p> 
                    <input type="checkbox" checked={this.state.isChecked} onClick={this.handleCheckAction}/>
                    <strike>{this.state.listItem}</strike>
                </p>
            )
        }
        else{
            return (
                <p> 
                    <input type="checkbox" checked={this.state.isChecked} onClick={this.handleCheckAction}/>
                    <span>{this.state.listItem}</span>
                </p>
            )
        }
        
    }

    render(){
        let listRender = this.renderList();
        return(
            <div>
                {listRender}
            </div>
        )
    }
}

export default ListView;