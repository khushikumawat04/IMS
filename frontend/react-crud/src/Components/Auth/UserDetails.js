import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/Auth';

const UserDetails = () => {
  const[auth,setAuth] = useAuth();
 
  return (
    <div>
      {/* Name <h1>{auth.user.username}</h1> */}
      {/* Email <h1>{auth.user.email}</h1> */}
      

      <div class="card" style={{marginLeft: "25rem" , marginRight: "10rem"}}>
  <div class="card-body">
    <h5 class="card-title">Name:- {auth.user.username}</h5>
    <p class="card-text">Email:- {auth.user.email}</p>
    <p class="card-text">Usertype:- {auth.user.userType || "Loading..."}</p>
    <p class="card-text">Phone:- {auth.user.phone || "Loading..."}</p>
    <p class="card-text">Address:- {auth.user.address || "Loading..."}</p>
    <h5 class="card-title">1 for "ADMIN" and 0 for "User"</h5>
    <button type="button" class="btn btn-primary">Button</button>
  </div>
</div>

      {/* <pre>{JSON.stringify(auth, null,4)}</pre> */}
    </div>
  )
}

export default UserDetails
