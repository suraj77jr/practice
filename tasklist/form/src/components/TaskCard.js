import React from "react";

const TaskCard = (props) => {
  const { id, taskid, name, duedate,priority} = props.tasks;
  return (
    <div className="item">

      <div className="content">
        <div className="header">{taskid}</div>
        <div>Name : {name}</div>
        <div>Due Date :{duedate}</div>
        <div>Priority : {priority}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default TaskCard;