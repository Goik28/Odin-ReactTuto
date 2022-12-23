import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      value: "",
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addTask() {
    this.setState({ task: this.state.tasks.push(this.state.value) });
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="App">
        <input
          name="task"
          type="text"
          placeholder="Write task here..."
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.addTask}>Add Task</button>

        <Overview tasks={this.state.tasks}></Overview>
      </div>
    );
  }
}

export default App;
