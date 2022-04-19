import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./QuizResult.css";

const QuizResult = () => {
  const QuizInfo = useSelector((state) => state.Quiz);
  const User = useSelector((state) => state.LoginUser);
  return (
    <div className="main">
      <div className="quizResult">
        <div className="title">
          <h3 className="title-text"> Result</h3>
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
          <div className="reg-text">Test Completed</div>
          <div className="result-desc">
            <div>
              You got {User.points/10} of
              {QuizInfo.quizData.length} questions correct
            </div>
            <div>
              Name: <span className="quiz-user">{User.Name}</span>
            </div>
            <div>
              Score: <span className="score">{User.points}</span>
            </div>
            <div className="timetaken">
              Time Taken: <span className="time">{User.time.min.toString().padStart(2, "0")} : {User.time.sec.toString().padStart(2, "0")}</span>
            </div>
          </div>
          <div className="start">
            <Link to={"/"}>
              <h3 className="start-text">Click to Attempt Again</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
