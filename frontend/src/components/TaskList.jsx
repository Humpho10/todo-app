import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, onUpdate }) => {
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length
  };

  if (tasks.length === 0) {
    return (
      <div className="task-list empty">
        <p className="empty-message">
          No tasks yet. Add your first task above! 📝
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="task-filters">
        <div className="filter-buttons">
          <button 
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            <span>All ({taskStats.total})</span>
          </button>
          <button 
            onClick={() => setFilter('active')}
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          >
            <span>Active ({taskStats.active})</span>
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          >
            <span>Completed ({taskStats.completed})</span>
          </button>
        </div>
      </div>

      <div className="tasks-container">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks-message">
            No {filter} tasks found.
          </p>
        ) : (
          filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;