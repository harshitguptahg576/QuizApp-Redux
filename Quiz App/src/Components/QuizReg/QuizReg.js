import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Register,
  StartQuiz,
  Logout,
  UserDetails,
} from "../../Services/Actions";
import "./QuizReg.css";

const QuizReg = ({ User, UpdateUser, register, startQuiz, Logout }) => {
  useEffect(() => {
    UpdateUser();
  }, []);
  return (
    <div className="main">
      <div className="quizStart">
        <div className="title">
          <h3 className="title-text"> My Quiz Problem</h3>
        </div>
        <div className="register">
          <div className="quizIcon">
            <img
              src="/Images/icon.gif"
              alt=""
              width={"120px"}
              height={"120px"}
            />
          </div>
          <div className="reg-text">WelCome</div>
          <div className="reg-name">
            <p className="username">{User.Name}</p>
          </div>
          <div className="start">
            <Link to={"/Quiz"}>
              <h3 className="start-text" onClick={() => startQuiz()}>Start Now</h3>
            </Link>
            <h3 className="start-text" onClick={() => Logout()}>
              Logout
            </h3>
          </div>
          {User.admin?<div className="start">
          <Link to={"/admin"}>
            <h3 className="start-text">Admin Page</h3>
            </Link>
          </div>:<div></div>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  User: state.LoginUser,
});

const mapDispatchToProps = (dispatch) => ({
  register: (name) => dispatch(Register(name)),
  startQuiz: () => dispatch(StartQuiz()),
  UpdateUser: () => dispatch(UserDetails()),
  Logout: () => dispatch(Logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizReg);
