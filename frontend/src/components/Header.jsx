import React from 'react';

const Header = ({ taskStats }) => {
  return (
    <header className="app-header">
      <h1 className="app-title">📋 Todo Manager</h1>
      <p className="app-subtitle">Stay organized and get things done!</p>
      
      {taskStats && (
        <div className="task-summary">
          <span className="summary-item">
            Total: <strong>{taskStats.total}</strong>
          </span>
          <span className="summary-item">
            Active: <strong>{taskStats.active}</strong>
          </span>
          <span className="summary-item">
            Completed: <strong>{taskStats.completed}</strong>
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;