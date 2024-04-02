import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // const [Name, setName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  const [ user, setUser] = useState({
    Name: "",
    Email:"",
    Password:""
})
  const navigate = useNavigate();
  // const showToastMessage = () => {
  //   toast.success('Success !', {
  //       position: toast.POSITION.BOTTOM_CENTER
  //   });
// };
const handlechange = (e) => {
  console.log(user)
  const{name,value} = e.target 
  setUser({
    ...user,
    [name]: value
  })
}
  const handlesubmit = async(e) => {
    e.preventDefault();
    // console.log(Name,Email,Password); 
    toast("User register Successfully");
    const {Name, Email,Password} = user
    if(Name && Email && Password){
      let result = await fetch('http://127.0.0.1:8080/register' , {
        method: 'post',
        body:JSON.stringify(user),
        headers:{
          'Content-Type':'application/json'
        },
      });
      result = await result.json()
      console.log(result);
      // alert("User Login Successfully");
      navigate('/login');
    }
    else{
      alert("Invalid Input");
    }
    
    
  }
  return (
    <div>
      {/* <h1>Register Page</h1> */}
      <section style={{ backgroundColor: "#eee" , marginLeft: "30%", marginRight: "10%"}}>
        <div class="container h-100">
                      <p class="text-center">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4" onSubmit={(e)=>handlesubmit(e)}>
                            <input
                              type="text"
                              placeholder="Your Name"
                              name="Name"
                              value={user.Name}
                              onChange={handlechange}
                              required
                            />
                            <input
                              type="email"
                              placeholder="Your Email"
                              name="Email"
                              value={user.Email}
                              onChange={handlechange}
                              required
                            />

                       
                            <input
                              type="password"
                              placeholder="Password"
                              name="Password"
                              value={user.Password}
                              onChange={handlechange}
                              required
                            />

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">
                            Register
                          </button>
                          {/* <button onClick={showToastMessage}>Notify</button> */}
                        </div>
                      </form>
                    </div>
      </section>
    </div>
  );
};

export default Register;
