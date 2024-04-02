import React, { useState } from "react";
import './addstudent.css';
import { Link } from "react-router-dom";
import CourseData from "./CoursesData";


const AddStudent = () => {
  const[First,setFirst] = useState();
  const[Last,setLast] = useState();
  const[Address,setAddress] = useState();
  const[Course,setCourse] = useState();

  const Submit = async(e) => {
    console.log(First,Last,Address,Course);
    e.preventDefault();
    let result = await fetch("http://127.0.0.1:8080",{
      method: 'post',
      body:JSON.stringify({First,Last,Address,Course}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result=await result.json()
    console.log(result);
    window.location.reload()
    
  }
  return (
    <div className="maindiv">
      <h1>Add Students</h1>
      <div className="container div1">
      <form onSubmit={Submit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName4"> First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName4"
              placeholder="Name"
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputName4">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName4"
              placeholder="Name"
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
        <div class="form-group col-md-6">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
          <div class="form-group col-md-6">
          <select onChange={(e) => setCourse(e.target.value)}>
          <option value="" disabled selected hidden >Select Course</option>
            {CourseData.map((C) => (
              <option>{C.course}</option>
            ))}
          </select>
        </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to='/table'>
        <button type="submit" class="btn btn-primary">
          View All
        </button></Link>
      </form>
      </div>
    </div>
  );
};

export default AddStudent;
