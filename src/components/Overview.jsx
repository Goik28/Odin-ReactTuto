import React, { Component } from "react";
import Task from "./Task";

class Overview extends Component {
  taskItems() {
    return this.props.tasks.map((value, index) => {
      return (
        <Task
          key={this.props.tasks[index] + "_" + index}
          name={value}
        ></Task>
      );
    });
  }

  render() {
    return (
      <div className="Overview">
        Task List
        <ol>{this.taskItems()}</ol>
      </div>
    );
  }
}

export default Overview;
