import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import './updatestudent.css'
import CourseData from './CoursesData';

const UpdateStudent = () => {
  const {id} = useParams()
   const[First,setFirst] = useState();
  const[Last,setLast] = useState();
  const[Address,setAddress] = useState();
  const[Course,setCourse] = useState();
   const getUser = async () => {
    const result = await fetch("http://127.0.0.1:8080/getstudents/"+id,{
      method: "get"
    })
    const user = await result.json()
    setFirst(user.First)
    setLast(user.Last)
    setAddress(user.Address)
    setCourse(user.Course)
    console.log(user);
  }
  useEffect( () => {
      getUser();
  },[])

  const Updatedata = async(e) => {
    console.log(First,Last,Address,Course);
    e.preventDefault();
    let result = await fetch("http://127.0.0.1:8080/updatestudent/"+id,{
      method: 'put',
      body:JSON.stringify({First,Last,Address,Course}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result=await result.json()
    console.log(result);
    
  }
  return (
    <div className='updatestudent'>
     <div className="container div1">
      <form onSubmit={Updatedata}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName4"> First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName4"
              placeholder="Name"
              value={First}
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
              value={Last}
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
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div class="form-group col-md-6">
          <select onChange={(e) => setCourse(e.target.value)} value={Course}>
            {CourseData.map((C) => (
              <option >{C.course}</option>
            ))}
          </select>
        </div>
        </div>
        <button type="submit" class="btn btn-success">
          Update
        </button>
        <Link to='/table'><button class="btn btn-primary">View All</button></Link>
      </form>
      </div>
    </div>
  )
}

export default UpdateStudent;
