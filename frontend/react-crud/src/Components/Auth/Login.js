import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const [ user, setUser] = useState({
    Email:"",
    Password:""
})

const handleChange = e => {
     const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}
  const handlesubmit = async(e, user,res, req) => {
    e.preventDefault();
    try {
         // console.log(Email,Password);
    let result = await fetch('http://127.0.0.1:8080/login', {
      method: 'post',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      },
    });
    if(result.ok)
    {
      const response = await result.json();
      alert(response.message);
      navigate('/');
    }
    else{
      alert("one");
    }
    // result = await result.json()
    // console.log(result);
   
    } catch (error) {
      console.log(error);
      alert("something went wrong"); 
    }
  }
  return (
    <div>
      {/* <h1>Login Page</h1> */}
      <section style={{ backgroundColor: "#eee" , marginLeft: "30%", marginRight: "10%"}}>
        <div class="container h-100">
                      <p class="text-center">
                        Login
                      </p>

                      <form class="mx-1 mx-md-4" onSubmit={(e)=>handlesubmit(e)}>
                            <input
                              type="email"
                              name="Email"
                              placeholder="Your Email"
                              value={user.EmailEmail}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="password"
                              name='Password'
                              placeholder="Password"
                              value={user.Password}
                              onChange={handleChange}
                              required
                            />

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
      </section>
    </div>
  )
}

export default Login
