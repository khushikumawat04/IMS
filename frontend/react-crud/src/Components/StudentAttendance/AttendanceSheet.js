import React, { useState, useEffect } from 'react';
import './Attendance.css';

const AttendanceSheet = () => {
  const [users, setUsers] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);


  //const filteredAttendance = attendanceData.filter(atten => atten.studentId === users._id);
  //console.log('Filtered Attendance:', filteredAttendance);

  const getAttendance = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/get-attendence', {
        method: 'get',
      });
      const studentAttendance = await response.json();
      setAttendanceData(studentAttendance);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  const StudentDetails = async () => {
    try {
      const result = await fetch('http://127.0.0.1:8080/table', {
        method: 'get',
      });
      const studentData = await result.json();
      setUsers(studentData);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };
  
 /* const getUniqueDates = () => {
    // Initialize an empty array to store unique dates
    const uniqueDates = [];
  
    // Iterate over each entry in the attendanceData array
    attendanceData.forEach((atten) => {
      // Extract the date from the attendance record and convert it to a localized date string
      const dateStr = new Date(atten.date).toLocaleDateString();
  
      // Check if the date is not already in the uniqueDates array
      if (!uniqueDates.includes(dateStr)) {
        // If not, add the date to the uniqueDates array
        uniqueDates.push(dateStr);
      }
    });
  
    // Return the array containing unique dates
    return uniqueDates;
  };*/
  

  useEffect(() => {
    getAttendance();
    StudentDetails();
  }, []);

  useEffect(() => {
    console.log('Users:', users);
    console.log('Attendance Data:', attendanceData);
  }, [users, attendanceData]);

 /* useEffect(() => {
    const filteredData = users.map(user => ({
      ...user,
      attendanceData: attendanceData.filter(atten => atten.studentId === user._id),
    }));
    setUsers(filteredData);
  }, [attendanceData]);*/

  
  return (
    <div>
    <div>
      <h3>Attendance Record For DSA</h3>
      <table className='tabledata'>
        <thead className='thead-dark' >
          <tr>
            <th scope='col'>S.no</th>
            <th scope='col'>Name</th>
            <th scope='col'>Course</th>
            {/*<th scope='col'>Date</th>*/}
           
            {attendanceData.map((atten, attenIndex) => (
  <div key={attenIndex}>
    {atten.attendanceRecords.map((record, recordIndex) => (
      <div key={recordIndex}>
        {console.log('Attendance Data:', atten)}
        {console.log('Record:', record)}
        {console.log('Date:', record.date)}

        <th scope='col' style={{ padding: '10px' }}>
          {record.Course === 'DSA' && (
            <div>
              <p>{new Date(record.date).toLocaleDateString()}</p>
            </div>
          )}
        </th>
      </div>
    ))}
  </div>
))}

          {/*  {attendanceData.map((atten, index) => (
              <th scope='col' style={{padding: "10px"}}>
              <div key={index}>
              
                 <p>{new Date(atten.date).toLocaleDateString()}</p>
                 
                 </div>
                 </th>
                 ))}    */}   
          </tr>
        </thead>
        <tbody>
          {
            users.filter((CH) => CH.Course === "DSA").map((user, index) => {
            
             return(
              
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{user.First} {user.Last}</td>
                <td>{user.Course}</td>
               
                  {attendanceData.map((atten,index) => (
                    <td key={index}>
                    <div key={index}>
                    {
                      atten.attendanceRecords.filter((atten1) => atten1.studentId === user._id)
                    .map((filteredAttendance, filteredIndex) => (
                      <div key={filteredIndex}>
                        <p>{filteredAttendance.attendance}</p>
                      </div>
                    ))}
                    
                     </div>
                     </td>
                  ))}
              </tr>
            )})}
        </tbody>
      </table>
    </div>
    {/*Sheet for Full Stack Web Development  */}
    <div>
      <h3>Attendance Record For Full Stack</h3>
      <table className='tabledata'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>S.no</th>
            <th scope='col'>Name</th>
            <th scope='col'>Course</th>
            {/*<th scope='col'>Date</th>*/}
            {attendanceData.map((atten, attenIndex) => (
  <div key={attenIndex}>
    {atten.attendanceRecords.map((record, recordIndex) => (
      <div key={recordIndex}>
        {console.log('Attendance Data:', atten)}
        {console.log('Record:', record)}
        {console.log('Date:', record.date)}

        <th scope='col' style={{ padding: '10px' }}>
          {record.Course === 'Full Stack Web Development' &&  (
            <div>
              <p>{new Date(record.date).toLocaleDateString()}</p>
            </div>
          )}
        </th>
      </div>
    ))}
  </div>
))}
          {/* {attendanceData.map((atten, index) => (
              <th scope='col'style={{padding: "10px"}}>
              <div key={index}>
              
                 <p>{new Date(atten.date).toLocaleDateString()}</p>
                 
                 </div>
                 </th>
                 ))}     */}    
          </tr>
        </thead>
        <tbody>
          {
            users.filter((CH) => CH.Course === "Full Stack Web Development").map((user, index) => {
            
             return(
              
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{user.First} {user.Last}</td>
                <td>{user.Course}</td>
               
                  {attendanceData.map((atten,index) => (
                    <td key={index}>
                    <div key={index}>
                    {
                      atten.attendanceRecords.filter((atten1) => atten1.studentId === user._id)
                    .map((filteredAttendance, filteredIndex) => (
                      <div key={filteredIndex}>
                        <p>{filteredAttendance.attendance}</p>
                      </div>
                    ))}
                    
                     </div>
                     </td>
                  ))}
              </tr>
            )})}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AttendanceSheet;
