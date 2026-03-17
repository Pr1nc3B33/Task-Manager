import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';
import TaskForm from './pages/TaskForm';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/task/:id" element={<ProtectedRoute><TaskDetail /></ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><TaskForm /></ProtectedRoute>} />
        <Route path="/edit/:id" element={<ProtectedRoute><TaskForm /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;