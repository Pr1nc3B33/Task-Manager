import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Please sign in to continue</p>
      <button onClick={() => loginWithRedirect()}>Sign In with Auth0</button>
    </div>
  );
}