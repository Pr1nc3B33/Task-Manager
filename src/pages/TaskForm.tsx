import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import type { Task } from '../types';
import { useState } from 'react'

export default function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, addTask, updateTask } = useTaskContext();

  const isEditing = Boolean(id);
  const existingTask = tasks.find((task) => task.id === id);

  const [title, setTitle] = useState(existingTask?.title || '');
  const [description, setDescription] = useState(existingTask?.description || '');
  const [priority, setPriority] = useState(existingTask?.priority || 'low');
  const [dueDate, setDueDate] = useState(existingTask?.dueDate || '');
  const [completed, setCompleted] = useState(existingTask?.completed || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && existingTask) {
      updateTask({ ...existingTask, title, description, priority, dueDate, completed });
    } else {
      addTask({ id: crypto.randomUUID(), title, description, priority, dueDate, completed });
    }
    navigate('/');
  };    

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Priority:
            <select value={priority} onChange={(e) => setPriority(e.target.value as Task['priority'])}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Due Date:
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Completed:
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
          </label>
        </div>
        <button type="submit">{isEditing ? 'Update' : 'Create'} Task</button>
      </form>
    );  
}