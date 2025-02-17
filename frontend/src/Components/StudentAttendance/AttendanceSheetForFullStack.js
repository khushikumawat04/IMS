import React, { useState, useEffect } from "react";
import "./Attendance.css";

const AttendanceSheetForFullStack = () => {
  const [users, setUsers] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const getAttendance = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/get-attendence", {
        method: "get",
      });
      const studentAttendance = await response.json();
      setAttendanceData(studentAttendance);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  const StudentDetails = async () => {
    try {
      const result = await fetch("http://127.0.0.1:8080/table", {
        method: "get",
      });
      const studentData = await result.json();
      setUsers(studentData);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  useEffect(() => {
    getAttendance();
    StudentDetails();
  }, []);

  useEffect(() => {
    console.log("Users:", users);
    console.log("Attendance Data:", attendanceData);
  }, [users, attendanceData]);

  return (
    <div>
      {/* <div>
        <h3>Attendance Record For DSA</h3>
        <table className="tabledata">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Course</th>

              {attendanceData.map((atten, attenIndex) => (
                <div key={attenIndex}>
                  {atten.attendanceRecords.map((record, recordIndex) => (
                    <div key={recordIndex}>
                      {console.log("Attendance Data:", atten)}
                      {console.log("Record:", record)}
                      {console.log("Date:", record.date)}

                      <th scope="col" style={{ padding: "10px" }}>
                        {record.Course === "DSA" && (
                          <div>
                            <p>{new Date(record.date).toLocaleDateString()}</p>
                          </div>
                        )}
                      </th>
                    </div>
                  ))}
                </div>
              ))}
            </tr>
          </thead>
          <tbody>
            {users
              .filter((CH) => CH.Course === "DSA")
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {user.First} {user.Last}
                    </td>
                    <td>{user.Course}</td>

                    {attendanceData.map((atten, index) => (
                      <td key={index}>
                        <div key={index}>
                          {atten.attendanceRecords
                            .filter((atten1) => atten1.studentId === user._id)
                            .map((filteredAttendance, filteredIndex) => (
                              <div key={filteredIndex}>
                                <p>{filteredAttendance.attendance}</p>
                              </div>
                            ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div> */}

      {/*Sheet for Full Stack Web Development  */}
      <div>
        <h3>Attendance Record For Full Stack</h3>
        <table className="tabledata">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Course</th>

              {attendanceData.map((atten, attenIndex) => (
                <div key={attenIndex}>
                  {atten.attendanceRecords.map((record, recordIndex) => (
                    <div key={recordIndex}>
                      {console.log("Attendance Data:", atten)}
                      {console.log("Record:", record)}
                      {console.log("Date:", record.date)}

                      <th scope="col" style={{ padding: "10px" }}>
                        {record.Course === "Full Stack Web Development" && (
                          <div>
                            <p>{new Date(record.date).toLocaleDateString()}</p>
                          </div>
                        )}
                      </th>
                    </div>
                  ))}
                </div>
              ))}
            </tr>
          </thead>
          <tbody>
            {users
              .filter((CH) => CH.Course === "Full Stack Web Development")
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {user.First} {user.Last}
                    </td>
                    <td>{user.Course}</td>

                    {attendanceData.map((atten, index) => (
                      <td key={index}>
                        <div key={index}>
                          {atten.attendanceRecords
                            .filter((atten1) => atten1.studentId === user._id)
                            .map((filteredAttendance, filteredIndex) => (
                              <div key={filteredIndex}>
                                <p>{filteredAttendance.attendance}</p>
                              </div>
                            ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceSheetForFullStack;
