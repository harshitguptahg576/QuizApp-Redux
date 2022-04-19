import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../../Services/Actions";
import Add from "./Add";
import "./Admin.css";

const Admin = () => {
  const User = useSelector((state) => state.LoginUser);
  const dispatch = useDispatch();

  const [addShow, setAdd] = useState("none");
  const [resultShow, setResult] = useState("none");
  

  return (
    <div className="main">
      <div className="quizStart">
        <div className="register">
          <div className="quizIcon">
            <img
              src="/Images/icon.gif"
              alt=""
              width={"120px"}
              height={"120px"}
            />
          </div>
          <div className="title">
            <h3 className="title-text"> Welcome {User.Name} (Admin)</h3>
          </div>
          <div className="start">
            <h3 className="start-text" onClick={() => setAdd("flex")}>
              Add Questions
            </h3>
            <h3 className="start-text" onClick={() => setResult("flex")}>
              Result
            </h3>
            
          </div>
          
          <div className="start">
            <Link to={"/"}>
              <h3 className="start-text">Back To Home</h3>
            </Link>
            <h3 className="start-text" onClick={() => dispatch(Logout())}>
              Logout
            </h3>
          </div>
        </div>
      </div>
      <div className="modal" style={{ display: addShow }}>
        <Add setAdd={setAdd} />
      </div>
      <div className="modal" style={{ display: addShow }}>
        <Add setAdd={setAdd} />
      </div>
    </div>
  );
};

export default Admin;
