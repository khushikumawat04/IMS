import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './studenttable.css';

const StudentTable = () => {
  const [users, setUsers] = useState([])

  const getUser = async () => {
    const result = await fetch("http://127.0.0.1:8080/table",{
      method: "get"
    })
    const user = await result.json()
    setUsers(user)
  }
  useEffect( () => {
      getUser();
  },[])
  const handledelete = async(id) => {
    const result = await fetch("http://127.0.0.1:8080/deletestudent/"+id,{
      method: "delete"
    })
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
    {/* Table For DSA */}
      <div className="tabledata">
      <h1 style={{textAlign: "center"}}>DSA</h1>
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Cousre</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          { users && users.filter((CH) => CH.Course === "DSA").map(( users, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{users.First}</td>
                <td>{users.Last}</td>
                <td>{users.Address}</td>
                <td>{users.Course}</td>
                
                <td>
                  <Link to={`/update/${users._id}`}>
                    <button class="btn btn-success">
                      Edit
                    </button>
                  </Link>
                  <button class="btn btn-danger" onClick={(e) => handledelete(users._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>

      {/* Table For Full Stack Web Development */}
      <div className="tabledata">
      <h1 style={{textAlign: "center"}}>Full Stack Web Development</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Cousre</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          { users && users.filter((CO) => CO.Course === "Full Stack Web Development").map(( users, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{users.First}</td>
                <td>{users.Last}</td>
                <td>{users.Address}</td>
                <td>{users.Course}</td>
                
                <td>
                  <Link to={`/update/${users._id}`}>
                    <button class="btn btn-success">
                      Edit
                    </button>
                  </Link>
                  <button class="btn btn-danger" onClick={(e) => handledelete(users._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
        </div>
      {/* Table For Web Development */}

      {/* Table For java */}
    </div>
  );
};

export default StudentTable;
