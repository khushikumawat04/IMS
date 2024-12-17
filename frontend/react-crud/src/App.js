import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
// import  { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddStudent from './Components/StudentsRegistration/AddStudent';
import StudentTable from './Components/StudentsRegistration/StudentTable';
import UpdateStudent from './Components/StudentsRegistration/UpdateStudent';
import Home from './Components/Homepage/Home';
import Dashboard from './Components/Homepage/Dashboard';
import Studentdashboard from './Components/StudentPages/Studentdashboard';
import MainPage from './Components/Homepage/MainPage';
import Studymaterial from './Components/StudyMaterial/Studymaterial';
import About from './Components/about us/About';
import LoginForm from './Components/Auth/LoginForm';
import RegistrationForm from './Components/Auth/RegistrationForm';
import UserDetails from './Components/Auth/UserDetails';
import PrivateRoute from './Routes/Private';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Album/Gallery';
import Video from './Components/StudyMaterial/Video/Video';
import Note from './Components/StudyMaterial/Notes/Note';
import Contact from './Components/Contact Us/Contact';
import EnrollForm from './Components/EnrollFormData/EnrollForm';
import Attendance from './Components/StudentAttendance/Attendance';
import AttendanceSheet from './Components/StudentAttendance/AttendanceSheet';
import Sheet from './Components/StudentAttendance/Sheet';
import Notice from './Components/Noticeboard/Notice';


function App() {
  return (
    <div className="App">
    <Router>
    <Home/>
    
      <Routes>
      
        <Route path='/' element={<>
         
        <MainPage/> 
       
        <Studymaterial/>
        <About/>
        <Courses/>
        </>}/>
        <Route path='/dashboard' element = {<PrivateRoute/>}>
        <Route path='' element={<Dashboard/>}/>
        </Route>
          {/* <Route>
          {localStorage.getItem('token') ?  <Route path='/dashboard' element={<Dashboard/>}/>  : <h1> Please Login</h1>}
          </Route> */}
          {/* <Route path='/admission' element = {<Admission/>}/> */}
        <Route path='/login' element= {<LoginForm/>}/>
        <Route path='/userData' element={<UserDetails/>}/>
        <Route path='/register' element= {<RegistrationForm/>}/>
        <Route path='/addstudent' element= {<AddStudent/>}/>
        <Route path='/table' element={<StudentTable/>}/>
        <Route path='/update/:id' element={<UpdateStudent/>}/>
        <Route path='/attendance' element={<Attendance/> }/>
        <Route path='/viewattendance' element={<AttendanceSheet/>}/>
        <Route path='/student' element={<Studentdashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/media' element={<Gallery/>}/>
        <Route path='/lecture' element={<Video/>}/>
        <Route path='/notes' element={<Note/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/enrollform' element={<EnrollForm/>}/>
        <Route path='/sheet' element={<Sheet/>}/>
        <Route path='/Notice' element = {<Notice/>}/>
      </Routes>
      <Footer/>
    </Router>
    <ToastContainer/>
     

    </div>
  );
}

export default App;
