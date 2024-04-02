

import React, { useState, useEffect } from 'react';
import './Attendance.css';

const Atten = () => {

  const Tstyle = {border:"2px solid black"}
  const [users, setUsers] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

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

  useEffect(() => {
    getAttendance();
    StudentDetails();
  }, []);

  useEffect(() => {
    console.log('Users:', users);
    console.log('Attendance Data:', attendanceData);
  }, [users, attendanceData]);
  

 /*  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };
 */
  const renderDateColumns = () => {
    const uniqueDates = [];

    const tableHeadColumns = attendanceData.reduce((columns, atten) => {
      if (atten.attendanceRecords && atten.attendanceRecords.length > 0) {
        atten.attendanceRecords.forEach((record) => {
          if (record.Course === 'DSA') {
            const formattedDate = new Date(record.date).toLocaleDateString();
            if (!uniqueDates.includes(formattedDate)) {
              uniqueDates.push(formattedDate);
              columns.push(
                <th key={formattedDate} scope='col' style={{ padding: '10px', border: '2px' }}>
                  {formattedDate}
                </th>
              );
            }
          }
        });
      }
      return columns;
    }, []);

    const tableBodyRows = users
  .filter((CH) => CH.Course === 'DSA')
  .map((user, index) => {
    const uniqueUserDates = [];

    return (
      <tr key={user._id}>
        <th scope='row'>{index + 1}</th>
        <td>{user.First} {user.Last}</td>
        <td>{user.Course}</td>
        {uniqueDates.map((formattedDate) => {
  const attendanceRecords = attendanceData.filter((atten) =>
    atten.attendanceRecords.some(
      (record) =>
        new Date(record.date).toLocaleDateString() === formattedDate &&
        record.studentId === user._id
    )
  );

  // Get unique attendance records for the specific user and date
  const uniqueUserDates = [];
  const userAttendanceRecords = attendanceRecords
    .map((attenRecord) => attenRecord.attendanceRecords)
    .flat()  // used to flatten the array convert 2d array in 1d array 
    .filter((record) => {
      const attenDate = new Date(record.date).toLocaleDateString();
      if (!uniqueUserDates.includes(attenDate) && record.studentId === user._id && attenDate === formattedDate) {
        uniqueUserDates.push(attenDate);
        return true;
      }
      return false;
    });

  return (
    <td key={formattedDate}>
      {userAttendanceRecords.map((attendanceRecord) => (
        <div key={attendanceRecord._id}>{attendanceRecord.attendance}</div>
      ))}
    </td>
  );
})}
      </tr>
    );
  });

    return { tableHeadColumns, tableBodyRows };
  };
  
  const { tableHeadColumns, tableBodyRows } = renderDateColumns();



  const renderDateColumns1 = () => {
    const uniqueDates = [];

    const tableHeadColumns1 = attendanceData.reduce((columns, atten) => {
      if (atten.attendanceRecords && atten.attendanceRecords.length > 0) {
        atten.attendanceRecords.forEach((record) => {
          if (record.Course === 'Full Stack Web Development') {
            const formattedDate = new Date(record.date).toLocaleDateString();
            if (!uniqueDates.includes(formattedDate)) {
              uniqueDates.push(formattedDate);
              columns.push(
                <th key={formattedDate} scope='col' style={{ padding: '10px', border: '2px' }}>
                  {formattedDate}
                </th>
              );
            }
          }
        });
      }
      return columns;
    }, []);

    const tableBodyRows1 = users
  .filter((CH) => CH.Course === 'Full Stack Web Development')
  .map((user, index) => {
    const uniqueUserDates = [];

    return (
      <tr key={user._id}>
        <th scope='row'>{index + 1}</th>
        <td>{user.First} {user.Last}</td>
        <td>{user.Course}</td>
        {/* {uniqueDates.map((formattedDate) => {
          const attendanceRecords = attendanceData
            .filter((atten) => atten.attendanceRecords.some((record) => new Date(record.date).toLocaleDateString() === formattedDate && record.studentId === user._id));

          const uniqueAttendanceRecords = attendanceRecords.filter((attenRecord) => {
            const attenDate = new Date(attenRecord.attendanceRecords[0].date).toLocaleDateString();
            if (!uniqueUserDates.includes(attenDate)) {
              uniqueUserDates.push(attenDate);
              return true;
            }
            return false;
          });
          console.log(`User: ${user._id}, Date: ${formattedDate}, Attendance: ${attendanceRecords.attendance}`);
          

          return (
            <td key={formattedDate}>
              {uniqueAttendanceRecords.map((attenRecord) => {
                const attendanceRecord = attenRecord.attendanceRecords[0];
                
                return (
                  <div key={attenRecord._id}>
                    <p>{attendanceRecord.attendance}</p>
                  </div>
                );
              })}
            </td>
          );
        })} */}

{/* {uniqueDates.map((formattedDate) => {
  const attendanceRecords = attendanceData.filter((atten) =>
    atten.attendanceRecords.some(
      (record) =>
        new Date(record.date).toLocaleDateString() === formattedDate &&
        record.studentId === user._id
    )
  );

  // Get attendance records for the specific user and date
  const userAttendanceRecords = attendanceRecords
    .map((attenRecord) => attenRecord.attendanceRecords)
    .flat()
    .filter((record) => record.studentId === user._id && new Date(record.date).toLocaleDateString() === formattedDate);

  return (
    <td key={formattedDate}>
      {userAttendanceRecords.map((attendanceRecord) => (
        <div key={attendanceRecord._id}>{attendanceRecord.attendance}</div>
      ))}
    </td>
  );
})} */}

{uniqueDates.map((formattedDate) => {
  const attendanceRecords = attendanceData.filter((atten) =>
    atten.attendanceRecords.some(
      (record) =>
        new Date(record.date).toLocaleDateString() === formattedDate &&
        record.studentId === user._id
    )
  );

  // Get unique attendance records for the specific user and date
  const uniqueUserDates = [];
  const userAttendanceRecords = attendanceRecords
    .map((attenRecord) => attenRecord.attendanceRecords)
    .flat()
    .filter((record) => {
      const attenDate = new Date(record.date).toLocaleDateString();
      if (!uniqueUserDates.includes(attenDate) && record.studentId === user._id && attenDate === formattedDate) {
        uniqueUserDates.push(attenDate);
        return true;
      }
      return false;
    });

  return (
    <td key={formattedDate}>
      {userAttendanceRecords.map((attendanceRecord) => (
        <div key={attendanceRecord._id}>{attendanceRecord.attendance}</div>
      ))}
    </td>
  );
})}


      </tr>
    );
  });


    return { tableHeadColumns1, tableBodyRows1 };
  };
  const { tableHeadColumns1, tableBodyRows1 } = renderDateColumns1();

  return (
    <div>
      {/* Attendance Record For DSA */}
      <div>
        <h3>Attendance Record For DSA</h3>
        <table className='tabledata' border='2px'>
      <thead className='thead-dark'>
        <tr style={Tstyle}>
          <th style={Tstyle} scope='col'>
            S.no
          </th>
          <th scope='col'>Name</th>
          <th scope='col'>Course</th>
          {tableHeadColumns}
        </tr>
      </thead>
      <tbody>{tableBodyRows}</tbody>
    </table>
      </div>

      {/* Attendance Record For Full Stack Web Development */}
      <div>
        <h3>Attendance Record For Full Stack Web Development</h3>
        <table className='tabledata' border='2px'>
      <thead className='thead-dark'>
        <tr style={Tstyle}>
          <th style={Tstyle} scope='col'>
            S.no
          </th>
          <th scope='col'>Name</th>
          <th scope='col'>Course</th>
          {tableHeadColumns1}
        </tr>
      </thead>
      <tbody>{tableBodyRows1}</tbody>
    </table>
      </div>
    </div>
  );
};

export default Atten;