import React, { Component } from 'react';
import './comp.css';

class Task extends Component {
    render() {
        return (
            <li className="task" onClick={this.props.onClickHandler}>
                {this.props.taskName}
            </li>
        );
    }
}

export default Task;
