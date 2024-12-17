import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';

const Home = () => {
  const[auth,setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div>
<header>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <Link to="/" class="list-group-item list-group-item-action py-4 ripple" aria-current="true">
          <i class="fas fa-home-alt fa-fw me-3"></i><span>Home</span>
        </Link>
        {
          localStorage.getItem('auth') &&
          <Link to="/dashboard" class="list-group-item list-group-item-action py-4 ripple">
          <i class="fas fa-lock fa-fw me-3"></i><span>Dashboard</span></Link>
        }
        <Link to="/about" class="list-group-item list-group-item-action py-4 ripple">
          <i class="fas fa-lock fa-fw me-3"></i><span>About us</span></Link>
          <Link to="/media" class="list-group-item list-group-item-action py-4 ripple">
          <i class="fas fa-lock fa-fw me-3"></i><span>Images</span></Link>
        <Link to="/courses" class="list-group-item list-group-item-action py-4 ripple">
          <i class="fas fa-chart-line fa-fw me-3"></i><span>Courses</span></Link>
        <Link to="/notes" class="list-group-item list-group-item-action py-4 ripple">
          <i class="fas fa-file-lines fa-fw me-3"></i><span>Notes</span>
        </Link>
          <Link to="/faculty" class="list-group-item list-group-item-action py-4 ripple"><i
            class="fas fa-globe fa-fw me-3"></i><span>Faculty</span></Link>
        <Link to="/contact" class="list-group-item list-group-item-action py-4 ripple">
          <i class="fa-solid fa-phone me-3"></i>
          <span>Contact</span></Link>
      </div>
    </div>
  </nav>

  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
   
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

 
      <a class="navbar-brand" href="#">
        <img src="../images/ims.png" height="50px" alt="MDB Logo"
          loading="lazy" />
      </a>
 
      {/* <form class="d-none d-md-flex input-group w-auto my-auto">
        <input autocomplete="off" type="search" class="form-control rounded"
          placeholder='Search (ctrl + "/" to focus)' style={{minWidth: "225px"}} />
        <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
      </form>*/}
      <ul class="navbar-nav ms-auto d-flex flex-row">
        <li class="nav-item dropdown">
          <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown"
            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="united kingdom flag m-0"></i>
          </a>
        </li>
        <li class="nav-item dropdown">
          {
            !auth.user ? (<>
              <Link to='/register'> <button type="button" class="btn register">Register</button></Link>
          <Link to='/login'> <button type="button" class="btn login ">Login</button></Link>
            </>) : (<>
              <Link to='/login'> <button type="button" class="btn Logout" onClick={handleLogout}>Logout</button></Link>
            </>)
          }
        </li>
      </ul>
    </div>
  </nav>

</header>
<main style={{marginTop: "58px"}}>
  <div class="container pt-4"></div>
</main>

    </div>
  )
}

export default Home;
