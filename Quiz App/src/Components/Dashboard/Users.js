import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {

    const Users=useSelector(state=>state.Users)    

  return (
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
                  <td>Admin</td>
                </tr>
              </thead>
              <tbody>
                {Users.userData.map((user,i)=>(<tr key={i}>
                  <td>{i+1}</td>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.submittedAnswers?(<span className="status green"></span>):<span className="status red"></span>}</td>
                  <td>{user.submittedAnswers?user.points:"-"}</td>
                  <td>{user.admin?"YES":"NO"}</td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Users