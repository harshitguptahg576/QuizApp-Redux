import axios from "axios";
import React, {
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Admin from "./Admin";
import "./Dashboard.css";
import Questions from "./Questions";
import Results from "./Results";
import Users from "./Users";

const Dashboard = () => {
  const sidebar = useRef(null);
  const LoginUser=useSelector(state=>state.LoginUser)

  const [tab, setTab] = useState("");

  return (
    <div className="dashboard">
      <div className="sidebar" ref={sidebar}>
        <div className="sidebar-brand">
          <h1>
            {" "}
            <img src="Images/H Logo.png" width={"50"} alt="H-Coder" />
            <span>H-Coder</span>
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#" className="active" onClick={() => setTab("")}>
                <span className="fas fa-tachometer-alt"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setTab("users")}>
                <span className="fas fa-users"></span>
                <span>Users</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setTab("ques")}>
                <span className="fas fa-stream"></span>
                <span>Quetions details</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setTab("account")}>
                <span className="fas fa-user-circle"></span>
                <span>Account</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setTab("result")}>
                <span className="fas fa-tasks"></span>
                <span>Result</span>
              </a>
            </li>

            <li>
              <Link to={"/"}>
                <span className="fas fa-sign-out-alt"></span>
                <span>Back To home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>
            <label
              htmlFor="nav-toggle"
              onClick={() =>
                [...sidebar.current.classList].includes("sidebarToggle")
                  ? sidebar.current.classList.remove("sidebarToggle")
                  : sidebar.current.classList.add("sidebarToggle")
              }
            >
              <span className="fas fa-bars"></span>
              Dashboard
            </label>
          </h2>

          <div className="search-wrapper">
            <span className="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
          </div>

          <div className="user-wrapper" onClick={() => setTab("account")}>
            <img
              src="https://i.ibb.co/yNGW4gg/avatar.png"
              width="40px"
              height="40px"
              alt="profile-img"
            />
            <div className="">
              <h4>{LoginUser.Name}</h4>
              <small>Admin User</small>
            </div>
          </div>
        </header>

        <main>{tab==="users"?<Users/>:tab==="ques"?<Questions/>:tab==="result"?<Results/>:tab === "account" ? <Admin /> : <Admin />}</main>
      </div>
    </div>
  );
};

export default Dashboard;
