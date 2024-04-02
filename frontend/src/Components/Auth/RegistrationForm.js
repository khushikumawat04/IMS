import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import  { toast } from 'react-hot-toast';
import { toast } from 'react-toastify';
import './registration.css';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [UserType,setUserType] =useState();
    const[SecretKey, setSecretKey] = useState();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    course: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'UserType')
    {
        setUserType(value);
    }
    else if(name === 'SecretKey')
    {
        setSecretKey(value);
    }
    else{
    setFormData((prevData) => ({ ...prevData, [name]: value }));}
  };

  const handleSubmit = async (e) => {
    if(UserType === 1 && SecretKey !== "Digital")
    {
        e.preventDefault();
        alert("Invalid Admin");
    }
    else{
        e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData , UserType, SecretKey}),
      });

      if (response.ok) {
        // alert('Registration successful!');
        localStorage.setItem("formData", JSON.stringify(formData));
        toast.success("Registration successful!")
        navigate('/login');
      } else {
        const data = await response.json();
        toast.error(data.message)
        // alert(data.message);
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
    }

    
  };

  return (
    <form onSubmit={handleSubmit} className='registrationform'>
    <h2 className='sign'>Registration Info</h2>
    <div>
        <input type='radio' name='UserType' value="0" onChange={handleChange}/>User
        <input type='radio' name='UserType' value="1" onChange={handleChange}/>Admin
    </div><br/>
      
      <div>
      <div>
      <label>Username </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        </div><br/>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div><br/>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div><br/>
      <div>
      {UserType === "1" ? 
      <>
      <label>SecretKey</label>
        <input
          type="password"
          name="SecretKey"
          onChange={handleChange}
        /><br/><br/>
        <div>
        <label>Phone</label>
        <input
          type="number"
          name="phone"
          onChange={handleChange}
        />
        </div><br/>
        <div>
         <label>Gender</label>
        <input
          type="text"
          name="course"
          onChange={handleChange}
        />
        </div><br/>
        <div>
         <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
        />
        </div>
        </>
        :<>
        <div>
        <label>Phone</label>
        <input
          type="number"
          name="phone"
          onChange={handleChange}
        />
        </div><br/>
        <div>
         <label>Course</label>
        <input
          type="text"
          name="course"
          onChange={handleChange}
        />
        </div><br/>
        <div>
         <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
        />
        </div>
        </>}
      </div>
      <button type="submit" class="btn btn-primary mt-3" >Register</button>
    </form>

    

  );
};

export default RegistrationForm;