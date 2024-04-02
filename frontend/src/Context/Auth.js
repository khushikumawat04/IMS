
/* import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const Auth = ({ children }) => {
  const [auth, setAuth] = useState({
    user: {
      username: '',
      email: '',
      UserType: '',
      phone: '',
      course: '',
      address: '',
    },
    token: '',
  });

  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parseData = JSON.parse(data);
      setAuth(prevAuth => ({
        ...prevAuth,
        user: {
          username: parseData.username,
          email: parseData.email,
          UserType: parseData.UserType,
          address: parseData.address,
          course: parseData.course,
          phone: parseData.phone,
        },
        token: parseData.token,
      }));
      console.log('Parsed data from localStorage:', parseData);
    }
    console.log('AuthProvider auth:', auth);
  },[]); 


  useEffect(() => {
    console.log('AuthProvider auth:', auth);
  }, [auth]);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { Auth, useAuth }; */

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const Auth = ({ children }) => {
  // Initialize state with data from localStorage or with default values
  const [auth, setAuth] = useState(() => {
    const storedData = localStorage.getItem('auth');
    return storedData ? JSON.parse(storedData) : {
      user: {
        username: '',
        email: '',
        UserType: '',
        phone: '',
        course: '',
        address: '',
      },
      token: '',
    };
  });

  useEffect(() => {
    // Save auth data to localStorage whenever auth changes
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    // Log auth whenever auth changes
    console.log('AuthProvider auth:', auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { Auth, useAuth };

