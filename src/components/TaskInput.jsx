import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ title: taskTitle, description: taskDescription });
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 w-full mb-2"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2 w-full mb-2"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
