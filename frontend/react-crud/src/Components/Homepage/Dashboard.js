import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
     
    <div className='dashboard'>
      <h3>Admin Dashboard</h3>
      <div class="row mt-5">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Admissions</h5>
        <Link to="/addstudent" class=" btn Adbtn">Add Students</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Attendance</h5>
        <Link to="/attendance" className=" btn Adbtn">Add Attendance</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Attendance Sheet</h5>
        <Link to="/viewattendance" class=" btn Adbtn">View Attendance</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Courses</h5>
        <Link to="/sheet" class=" btn Adbtn">Add Courses</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Notice Board</h5>
        <Link to="/Notice" class=" btn Adbtn">Add Notice</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Fees</h5>
        <Link to="/attendance" class=" btn Adbtn">View</Link>
      </div>
    </div>
  </div>
</div>
    </div>
   
  )
}

export default Dashboard;
