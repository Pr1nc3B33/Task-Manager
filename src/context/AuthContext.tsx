import { createContext, useState, useContext } from 'react';
import type { AuthUser } from '../types';

interface AuthContextType {
  currentUser: AuthUser | null;
  setCurrentUser: (user: AuthUser | null) => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  const isAuthenticated = !!currentUser;

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext must be used within AuthProvider');
  return context;
}   
