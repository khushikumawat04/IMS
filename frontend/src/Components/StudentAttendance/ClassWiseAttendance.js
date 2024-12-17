import React from "react";
import CWAData from "./CWA";
import { Link } from "react-router-dom";

const ClassWiseAttendance = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Class Wise Attendance</h1>
      <div
        class="row row-cols-1 row-cols-md-4 g-4 my-4"
        style={{ marginLeft: "200px" }}
      >
        {CWAData.map((d) => {
          return (
            <>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{d.title}</h5>
                    <Link to={d.path}>
                      <button className="btn btn-primary">
                        view Attendance
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ClassWiseAttendance;
