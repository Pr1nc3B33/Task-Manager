import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';


export default function Login() {
  const { setCurrentUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = () => {
  
    setCurrentUser({
      id: '1',
      name: 'Benny Bailey',
      email: 'benny@example.com',
      picture: ''
    });
    navigate('/');
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Please sign in to continue</p>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}