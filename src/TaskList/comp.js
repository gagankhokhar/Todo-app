import React, { Component } from 'react';
import './comp.css';

class TaskList extends Component {
    render() {
        return (
            <ul className="task--list">{this.props.children}</ul>
        );
    }
}

export default TaskList;
