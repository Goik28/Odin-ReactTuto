import React, { Component } from "react";

class Task extends Component {
  render() {
    return <li className="Task">{this.props.name}</li>;
  }
}

export default Task;
