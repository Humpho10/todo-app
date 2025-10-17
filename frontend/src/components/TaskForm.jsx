import React, { useState } from 'react';

const TaskForm = ({ onSubmit, onCancel, initialData = null }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit({ title: title.trim(), description: description.trim() });
      if (!initialData) {
        setTitle('');
        setDescription('');
      }
    } catch (error) {
      console.error('Error submitting task:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Description (optional)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          rows="3"
          disabled={isSubmitting}
        />
      </div>
      <div className="form-actions">
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!title.trim() || isSubmitting}
        >
          {isSubmitting ? 'Saving...' : (initialData ? 'Update' : 'Add Task')}
        </button>
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;