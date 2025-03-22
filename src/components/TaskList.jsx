import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, toggleTaskCompletion, updateTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            updateTask={updateTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
