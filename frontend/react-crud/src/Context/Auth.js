
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const Auth = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  });
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []); // Run only once when the component mounts

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { Auth, useAuth };
