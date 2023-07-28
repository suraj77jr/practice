import React from "react";
class AddTask extends React.Component {
  // Class state, not a react hook
    state = {
      taskid: "",
      name: "",
      duedate:"",
      priority:"" ,
  };

  add = (e) => {
    e.preventDefault(); // To avoid the page from being refreshed
    if (this.state.taskid === "" || this.state.name === "" || this.state.duedate === ""  || this.state.priority === "" ) {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addTaskHandler(this.state);
    this.setState({ taskid:"", name: "", duedate: "", priority:"" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Task</h2>
        <form className="ui form" onSubmit={this.add}>
        <div className="field">
            <label>Task Id</label>
            <input
              type="text"
              name="taskid"
              placeholder="Id"
              value={this.state.taskid}
              onChange={(e) => this.setState({ taskid: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Task Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Due Date</label>
            <input
              type="date"
              name="duedate"
              placeholder="DueDate"
              value={this.state.duedate}
              onChange={(e) => this.setState({ duedate: e.target.value })}
            />
          </div>
          <div className="field">
          <label for="priority">Priority:</label>
              <select 
                name="priority" 
                id="priority"
                value={this.state.priority}
                onChange={(e) => this.setState({ priority: e.target.value })}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select> 
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;