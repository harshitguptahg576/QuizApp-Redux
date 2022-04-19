import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {

    const Users=useSelector(state=>state.Users)    
    const CompleteUsers=2
  return (
    <Fragment>
      <div className="cards">
        <div className="card-single">
          <div>
            <h1>{Users.userData.length}</h1>
            <span>Total Users</span>
          </div>
          <div>
            <span className="fas fa-users"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>{Users.userData.length-CompleteUsers}</h1>
            <span> Pending Users</span>
          </div>
          <div>
            <span className="fas fa-clipboard-list"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>{CompleteUsers}</h1>
            <span>Project Completed</span>
          </div>
          <div>
            <span className="fas fa-shopping-cart"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>12sec </h1>
            <span>Average Time</span>
          </div>
          <div>
            <span className="fas fa-wallet"></span>
          </div>
        </div>
      </div>

      <div className="recent-grid">
        <div className="projects">
          <div className="card">
            <div className="card-header">
              <h2>All Users</h2>
              <button>
                See all <span className="fas fa-arrow-right"></span>{" "}
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table width="100%">
                  <thead>
                    <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Submited</td>
                      <td>Marks</td>
                    </tr>
                  </thead>
                  <tbody>
                    {Users.userData.map((user,i)=>(<tr key={i}>
                      <td>{i+1}</td>
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.submittedAnswers?(<span className="status green"></span>):<span className="status red"></span>}</td>
                      <td>{user.submittedAnswers?user.points:"-"}</td>
                    </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
