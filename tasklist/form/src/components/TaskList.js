import React from "react";
import TaskCard from "./TaskCard";

const TaskList = (props) => {
  console.log(props);

  const deleteTaskHandler = (id) => {
    props.getTaskId(id);
  };
  const renderTaskList = props.tasks.map((task) => {
    return (
      <TaskCard
        tasks={task}
        clickHander={deleteTaskHandler}
        key={task.id}
      />
    );
  });
  return <div className="ui celled list">{renderTaskList}</div>;
};

export default TaskList;