import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      await onUpdate(task.id, updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <TaskForm
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
          initialData={task}
        />
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
            className="task-checkbox"
          />
          <h3 className="task-title">{task.title}</h3>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        <div className="task-meta">
          <span className="task-date">Created: {formatDate(task.createdAt)}</span>
          {task.updatedAt !== task.createdAt && (
            <span className="task-date">Updated: {formatDate(task.updatedAt)}</span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <button 
          onClick={() => setIsEditing(true)}
          className="btn btn-edit"
          title="Edit task"
        >
          ✏️
        </button>
        <button 
          onClick={handleDelete}
          className="btn btn-delete"
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;