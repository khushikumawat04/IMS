import React from 'react'
import CourseCardData from './CourseCardData'
import './courses.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className='coursecard'>
    <h1 className='heading'>Courses</h1>
    <div className='cardgrid'>
    {CourseCardData.map((val) => {
      return(
      <>
      <div class="card " style={{width: "18rem"}}>
      <div class="card-body">
    <h5 class="card-title text-muted">{val.name}</h5>
    <p class="card-text text-muted"> {val.Details}</p>
    <Link to="/enrollform" class="btn enrollnow">Enroll Now</Link>
  </div>
  </div>
      </>
      ) })}
      </div>
  

    </div>
  )
}

export default Courses
