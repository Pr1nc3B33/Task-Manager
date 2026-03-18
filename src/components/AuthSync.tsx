import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuthContext } from '../context/AuthContext';

export default function AuthSync() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { setCurrentUser } = useAuthContext();

  useEffect(() => {
    console.log('Auth0 state:', { isAuthenticated, isLoading, user });
    if (isAuthenticated && user) {
      setCurrentUser({
        id: user.sub ?? '',
        name: user.name ?? '',
        email: user.email ?? '',
        picture: user.picture ?? ''
      });
    } else {
      setCurrentUser(null);
    }
  }, [isAuthenticated, user]);

  if (isLoading) return <div>Loading...</div>;

  return null;
}