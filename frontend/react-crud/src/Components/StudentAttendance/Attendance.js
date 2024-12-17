import React, { useState, useEffect } from 'react';

const Attendance = () => {
  const [users, setUsers] = useState([]);
 // const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState('');
  const [attendanceData, setAttendanceData] = useState({});

  const getStudents = async () => {
    const result1 = await fetch("http://127.0.0.1:8080/table", {
      method: "get"
    });
    const studentData = await result1.json();
    setUsers(studentData);
  };
 
  const handleAttendanceChange = (studentId, attendance, course , date) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [studentId]: {attendance, Course: course , date}
    }));
  };

  

  const handleSubmit = async () => {
   // const handleAttendance = async () => {
    const attendanceArray = Object.entries(attendanceData).map(([studentId, data]) => ({
      studentId,
      attendance:data.attendance,
      Course: data.Course,
      date: data.date,
    }));
    console.log(attendanceArray);
    try {
      const response = await fetch("http://127.0.0.1:8080/submit-attendance", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ attendanceRecords: attendanceArray  }),
        //body: JSON.stringify({attendance, date}),
      });

      if (response.ok) {
        console.log("Attendance data submitted successfully.");
      } else {
        console.error("Failed to submit attendance data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  useEffect(() => {
    getStudents();
    setDate(new Date().toLocaleString());
  }, []);

  return (
    <div>
    <div className='tabledata'>
      <h3>Attendance Sheet for DSA</h3>
      <h4 style={{ textAlign: 'left' }}>Date : {date}</h4>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col"> Name</th>
            <th scope="col">Course</th>
            <th scope="col">Attendance</th>
          </tr>
        </thead>
        <tbody>
          { users.filter((CH) => CH.Course === "DSA").map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.First} {user.Last}</td>
              <td>{user.Course}</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name={`attendance_${user._id}`}
                    value="Present"
                    checked={attendanceData[user._id]?.attendance === 'Present'}
                    onChange={() => handleAttendanceChange(user._id, 'Present' , user.Course)}
                  />
                  Present
                </label>
                <label>
                  <input
                    type="radio"
                    name={`attendance_${user._id}`}
                    value="Absent"
                    checked={attendanceData[user._id]?.attendance === 'Absent'}
                    onChange={() => handleAttendanceChange(user._id, 'Absent' ,user.Course)}
                  />
                  Absent
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
      <button onClick={(e) => { e.preventDefault(); handleSubmit(); }}>Submit Attendance</button>
    </div>
    {/*Attendance Sheet For Full Stack Web Development */}
    <div className='tabledata'>
      <h3>Attendance Sheet for Full Stack Web Development</h3>
      <h4 style={{ textAlign: 'left' }}>Date : {date}</h4>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col"> Name</th>
            <th scope="col">Course</th>
            <th scope="col">Attendance</th>
          </tr>
        </thead>
        <tbody>
          { users.filter((CH) => CH.Course === "Full Stack Web Development").map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.First} {user.Last}</td>
              <td>{user.Course}</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name={`attendance_${user._id}`}
                    value="Present"
                    checked={attendanceData[user._id]?.attendance === 'Present'}
                    onChange={() => handleAttendanceChange(user._id, 'Present' ,user.Course)}
                  />
                  Present
                </label>
                <label>
                  <input
                    type="radio"
                    name={`attendance_${user._id}`}
                    value="Absent"
                    checked={attendanceData[user._id]?.attendance === 'Absent'}
                    onChange={() => handleAttendanceChange(user._id, 'Absent', user.Course)}
                  />
                  Absent
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
      <button onClick={(e) => { e.preventDefault(); handleSubmit(); }}>Submit Attendance</button>
    </div>
    </div>
  );
};

export default Attendance;
