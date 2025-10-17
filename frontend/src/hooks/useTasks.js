import { useState, useEffect } from 'react';
import { taskAPI } from '../services/api';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskAPI.getAllTasks();
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create new task
  const createTask = async (taskData) => {
    try {
      const response = await taskAPI.createTask(taskData);
      setTasks(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError('Failed to create task');
      throw err;
    }
  };

  // Update task
  const updateTask = async (id, updates) => {
    try {
      const response = await taskAPI.updateTask(id, updates);
      setTasks(prev => prev.map(task => 
        task.id === id ? response.data : task
      ));
      return response.data;
    } catch (err) {
      setError('Failed to update task');
      throw err;
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await taskAPI.deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
      throw err;
    }
  };

  // Toggle task completion
  const toggleTask = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      await updateTask(id, { completed: !task.completed });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    createTask,
    updateTask,
    deleteTask,
    toggleTask,
    refetch: fetchTasks
  };
};