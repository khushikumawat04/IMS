import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/Auth";
import './studentdashboard.css';

const Studentdashboard = () => {
  const[auth,setAuth] = useAuth();
  const [notice , setNotice] = useState([]);

  const getNotice = async() => {
    const Notice1 = await fetch("http://127.0.0.1:8080/get-notice",{
      method: "get"
    });
    const NoticeData = await Notice1.json();
    setNotice(NoticeData);
    console.log(NoticeData);
  }
  
 
  /* const getNotice = async () => {
    try {
      console.log("Before fetching notice");
      const storedNotice = localStorage.getItem('Notice');
  
      if (!storedNotice) {
        console.log("Fetching notice from API");
        const response = await fetch("http://127.0.0.1:8080/get-notice", {
          method: "get"
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const noticeData = await response.json();
        console.log("Notice Data from API:", noticeData);
  
        setNotice(noticeData);
        localStorage.setItem('Notice', JSON.stringify(noticeData));
      } else {
        console.log("Notice Data from localStorage:", storedNotice);
        setNotice(JSON.parse(storedNotice));
      }
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  }; */
  
  
  
  useEffect(() => {
    getNotice();
  }, []);

 /* useEffect(() => {
     console.log("Notice State before rendering:", Notice);
    getNotice(); 
    const fetchData = async () => {
      await getNotice();
    };
  
    fetchData();
  }, []);*/
  

  return (
    <div style={{ marginLeft: "20%" }}>
      <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="ex-with-icons-tab-1"
            data-mdb-toggle="tab"
            href="#ex-with-icons-tabs-1"
            role="tab"
            aria-controls="ex-with-icons-tabs-1"
            aria-selected="true"
          >
            <i class="fas fa-chart-pie fa-fw me-2"></i>Dashboard
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex-with-icons-tab-2"
            data-mdb-toggle="tab"
            href="#ex-with-icons-tabs-2"
            role="tab"
            aria-controls="ex-with-icons-tabs-2"
            aria-selected="false"
          >
            <i class="fas fa-chart-line fa-fw me-2"></i>Payment History
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex-with-icons-tab-3"
            data-mdb-toggle="tab"
            href="#ex-with-icons-tabs-3"
            role="tab"
            aria-controls="ex-with-icons-tabs-3"
            aria-selected="false"
          >
            <i class="fas fa-cogs fa-fw me-2"></i>Notice
          </a>
        </li>
      </ul>

      <div class="tab-content" id="ex-with-icons-content">
        <div
          class="tab-pane fade show active"
          id="ex-with-icons-tabs-1"
          role="tabpanel"
          aria-labelledby="ex-with-icons-tab-1"
        >
          {/* Tab 1 content */}
          <section style={{backgroundColor: "#eee"}}>
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 className="my-3 text-muted">{auth.user.username}</h5>
            <p className="text-muted mb-1">{auth.user.course}</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">Follow</button>
              <button type="button" className="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card mb-4">
        {console.log("Auth Data in Studentdashboard:", auth)}
        {console.log("User Data in Studentdashboard:", auth.user)}

          <h5>Name : <span>{auth.user.username}</span> </h5> <br/>
          <h5>Email : <span>{auth.user.email}</span> </h5> <br/>
          <h5>UserType : <span>{auth.user.UserType}</span> </h5> <br/>
          <h5>Phone : <span>{auth.user.phone}</span> </h5> <br/>
          <h5>Course : <span>{auth.user.course} </span> </h5> <br/>
          <h5>Address : <span>{auth.user.address}</span> </h5> <br/>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
        <div
          class="tab-pane fade"
          id="ex-with-icons-tabs-2"
          role="tabpanel"
          aria-labelledby="ex-with-icons-tab-2"
        >
          Tab 2 content

          <div className="card mb-4">
          {/*<p>Price:<span>{fee.price}</span></p>
       <button onClick={handlePayment} type="button" class="btn btn-primary">Payment</button>*/}
        </div>
        </div>
        <div
          class="tab-pane fade"
          id="ex-with-icons-tabs-3"
          role="tabpanel"
          aria-labelledby="ex-with-icons-tab-3"
        >
          Tab 3 content
          {console.log("Notice Data Structure:", notice)}
          {notice && notice.map((item, index) => <p key={index}>{item.notice}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Studentdashboard;
