import React from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useTasks } from './hooks/useTasks';
import './App.css';

function App() {
  const {
    tasks,
    loading,
    error,
    createTask,
    updateTask,
    deleteTask,
    toggleTask
  } = useTasks();

  const taskStats = {
    total: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading your tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <Header taskStats={taskStats} />
        
        {error && (
          <div className="error-message">
            <p>⚠️ {error}</p>
          </div>
        )}

        <main className="main-content">
          <section className="add-task-section">
            <h2>Add New Task</h2>
            <TaskForm onSubmit={createTask} />
          </section>

          <section className="tasks-section">
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          </section>
        </main>

        <footer className="app-footer">
          <p>Built with React & Node.js 💻</p>
        </footer>
      </div>
    </div>
  );
}

export default App;