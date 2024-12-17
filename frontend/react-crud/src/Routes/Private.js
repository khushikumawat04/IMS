
import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/Auth";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import LoginForm from "../Components/Auth/LoginForm";
import Studentdashboard from "../Components/StudentPages/Studentdashboard";

export default function PrivateRoute() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      if (auth?.token) {
        try {
          const res = await fetch("http://127.0.0.1:8080/user-auth", {
            // method: "post",
            headers: {
              Authorization: auth.token,
            },
          });

          if (res.ok) {
            setIsAuthenticated(true);
          } else if (res.status === 401) {
            setIsAuthenticated(false);
          } else {
            throw new Error("Failed to validate user authentication.");
          }
        } catch (error) {
          console.error("Error while checking user authentication:", error);
          setIsAuthenticated(false);
        } finally {
          setLoading(false); // Mark the authentication check as done (with success or error)
        }
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };

    authCheck();
  }, [auth?.token]);

  if (loading) {
    // Return a spinner component or loading animation here
    return <div>Loading ......</div>; 
  }
else{
  return isAuthenticated ? <Outlet /> : <Studentdashboard/>
  // navigate('/login')
  // toast.error("UnAuthorized Login")
  ;}
}


