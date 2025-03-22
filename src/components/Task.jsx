import React, { useState } from "react";

function Task({ task, deleteTask, toggleTaskCompletion, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const handleEdit = () => {
    updateTask(task.id, {
      title: updatedTitle,
      description: updatedDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className="mb-4 p-4 border rounded shadow">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="border p-2 w-full mb-2"
          ></textarea>
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white p-2 mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white p-2"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3 className={`text-xl ${task.completed ? "line-through" : ""}`}>
            {task.title}
          </h3>
          <p>{task.description}</p>
          <button
            onClick={() => toggleTaskCompletion(task.id)}
            className="bg-yellow-500 text-white p-2 mr-2"
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white p-2 mr-2"
          >
            Delete
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white p-2"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Task;
