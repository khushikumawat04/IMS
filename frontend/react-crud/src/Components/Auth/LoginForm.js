import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../Context/Auth';
import './LoginForm.css'

const LoginForm = () => {
  const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(response.data);
      // localStorage.setItem('UserType' , response.data.UserType)
      // localStorage.setItem('token' , response.data.token)
      if (response.ok) {
          setAuth({
            ...auth,
            user: data.user,
            token: data.token,
            userType: data.userType,
            phone: data.phone,
            address: data.address,
          });
          localStorage.setItem("auth", JSON.stringify(data));
          toast.success(data.message);
          navigate('/userData');
          // navigate('/dashboard');
      } else if (response.status === 404) {
        toast.error(data.message);
      } else if (response.status === 401) {
        toast.error(data.message);
      } else {
        toast.error("An error Occurred");
      }
    // }
// })

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='body1'>
    <div className='boxbox'>
    <div className='formform' >
    <h2>Sign in</h2>
    <form onSubmit={handleSubmit}>
      <div className='inputBox'>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>Email:</span>
        <i></i>
      </div>
      <div className='inputBox'>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
         <span>Password:</span>
        <i></i>
      </div>
      <button type="submit" className='login1'>Login</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;