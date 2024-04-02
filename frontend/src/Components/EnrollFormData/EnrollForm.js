import React ,{useState} from 'react'
import './enroll.css'
const EnrollForm = () => {
    const[data,setData] = useState({
        name: "",
        email: "",
        contact: "",
        course:"",
    });

    const {name, email, contact, course} = data;

    const handlechange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://v1.nocodeapi.com/enrollmentform01/google_sheets/QMJKOPvUlctmqPEV?tabId=Sheet1' , 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[name, email, contact, course , new Date().toLocaleString()]])
            });
            await response.json();
            setData({...data, name: "", email: "", contact: "", course: ""});
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
        <div className='body2'>
    <div className='boxbox1'>
    <div className='formform' >
    <h2>Enrollment Form</h2>
    <form onSubmit={handleSubmit}>
    <div className='inputBox'>
        <input
          type="text"
          name="name"
          value={name} 
          onChange={handlechange}
        />
        <span>Name:</span>
        <i></i>
      </div>
      <div className='inputBox'>
        <input
          type="email"
          name="email" 
          value={email} 
          onChange={handlechange}
        />
        <span>Email:</span>
        <i></i>
      </div>
      <div className='inputBox'>
        <input
          type="number"
          name="contact" 
          value={contact} 
          onChange={handlechange}  
        />
         <span>Contact no.:</span>
        <i></i>
      </div>
      <div className='inputBox'>
        <input
          type="text"
          name="course" 
          value={course} 
          onChange={handlechange}  
        />
         <span>Course Name:</span>
        <i></i>
      </div>
      <button type="submit" className='login2'>submit</button>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default EnrollForm
