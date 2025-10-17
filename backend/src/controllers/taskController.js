const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Task = require('../models/Task');

const dataFile = path.join(__dirname, '../../data/tasks.json');

// Initialize data file
const initializeDataFile = async () => {
  try {
    await fs.ensureFile(dataFile);
    const exists = await fs.pathExists(dataFile);
    if (exists) {
      const content = await fs.readFile(dataFile, 'utf8');
      if (!content.trim()) {
        await fs.writeJson(dataFile, []);
      }
    }
  } catch (error) {
    console.error('Error initializing data file:', error);
    await fs.writeJson(dataFile, []);
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    await initializeDataFile();
    const tasks = await fs.readJson(dataFile);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Create new task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    await initializeDataFile();
    const tasks = await fs.readJson(dataFile);
    
    const newTask = new Task(uuidv4(), title, description);
    tasks.push(newTask);
    
    await fs.writeJson(dataFile, tasks);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Update task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    await initializeDataFile();
    const tasks = await fs.readJson(dataFile);
    
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...updates, updatedAt: new Date() };
    await fs.writeJson(dataFile, tasks);
    
    res.json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await initializeDataFile();
    const tasks = await fs.readJson(dataFile);
    
    const filteredTasks = tasks.filter(task => task.id !== id);
    
    if (tasks.length === filteredTasks.length) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await fs.writeJson(dataFile, filteredTasks);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};