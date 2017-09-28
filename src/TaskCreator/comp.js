import React, { Component } from 'react';
import './comp.css';

class TaskCreator extends Component {
    render() {
        return (
            <div className="task--creator">
                <label>New Task:</label>
                <input type="text" onKeyUp={this.props.onKeyUpHandler} placeholder="ADD TODO HERE..." />
            </div>
        );
    }
}

export default TaskCreator;
