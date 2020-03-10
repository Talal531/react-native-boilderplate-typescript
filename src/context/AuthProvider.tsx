import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';

type User = null | {username: string};

interface AuthContextValue {
  user: User;
  login: () => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const dummyUser = {username: 'abc123'};
          setUser(dummyUser);
          AsyncStorage.setItem('user', JSON.stringify(dummyUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem('user');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
