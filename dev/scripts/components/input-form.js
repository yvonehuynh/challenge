import React from "react";

// Initialize Firebase


export default class InputForm extends React.Component {
    render() {
        return (
            <div className="input-form-container">
                <form action="" onSubmit={this.props.addItem}>
                    <label htmlFor="todo-input" className="visuallyhidden">Add your to do items</label>
                    <input 
                    type="text" 
                    name="todoQuery" 
                    id="todo-input"
                    placeholder="add your to do items here"
                    aria-label="Add your to do items here"
                    tabIndex="0"
                    onChange={this.props.onChange}/>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}