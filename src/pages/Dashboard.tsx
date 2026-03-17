import { useTaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { tasks, deleteTask, updateTask } = useTaskContext();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <button onClick={() => navigate('/create')}>Create New Task</button>
      </header>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate}</p>
            <label>
              Completed:
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => updateTask({ ...task, completed: !task.completed })}
              />
            </label>
            <button onClick={() => navigate(`/task/${task.id}`)}>View</button>
            <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
