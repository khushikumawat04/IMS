import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
     
    <div className='dashboard'>
      <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Admissions</h5>
        <Link to="/addstudent" class="btn btn-primary">Add Students</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Attendance</h5>
        <Link to="/attendance" class="btn btn-primary">Add Attendance</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Attendance Sheet</h5>
        <Link to="/viewattendance" class="btn btn-primary">View Attendance</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Exams</h5>
        <Link to="/sheet" class="btn btn-primary">Add Exam</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Notice Board</h5>
        <Link to="/notice" class="btn btn-primary">Add Notice</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Fees</h5>
        <Link to="/attendance" class="btn btn-primary">View</Link>
      </div>
    </div>
  </div>
</div>
    </div>
   
  )
}

export default Dashboard;
