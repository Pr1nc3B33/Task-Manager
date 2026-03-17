import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';



export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useTaskContext();

  const task = tasks.find((t) => t.id === id);

  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button onClick={() => {
        deleteTask(task.id);
        navigate('/');
      }}>Delete</button>
    </div>  
  );
}