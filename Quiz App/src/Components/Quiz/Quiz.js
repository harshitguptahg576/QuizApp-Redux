import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";
import {
  UpdateAnswers,
  UpdatePoints,
  UpdateTime,
  UpdateUser,
} from "../../Services/Actions";
import "./Quiz.css";

const Quiz = () => {
  // UseDispatch And UseSelector : Redux
  const dispatch = useDispatch();
  const Quiz = useSelector((state) => state.Quiz);
  const User = useSelector((state) => state.LoginUser);

  //   UseRef:
  const result = useRef(null);
  const options = useRef(null);

  // States by UseState:
  const [quesData, setQuesData] = useState([]);
  const [quesNo, setQuesNo] = useState(0);
  const [opt, setOpt] = useState(undefined);
  const [go, setGo] = useState(false);
  const [points, setPoints] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  //   UseEffect:
  useEffect(() => {
    setQuesData(Quiz.quizData);
  }, [Quiz]);

  // For Navigation:
  const navigate = useNavigate();

  // Timer: react timer Hook
  const { seconds, minutes, start, pause } = useStopwatch({ autoStart: true });

  // Checked change Logic
  useEffect(() => {
    if (options.current) {
      opt
        ? [...options.current.children].map((option) => {
            option.children[1].checked
              ? option.classList.add("correct")
              : [...option.classList].includes("correct")
              ? option.classList.remove("correct")
              : option.classList.remove("correct");
          })
        : [...options.current.children].map((option) => {
            if ([...option.classList].includes("correct"))
              option.classList.remove("correct");
          });
    }
  }, [opt]);

  //   Submit button Handler: submitQues
  const submitQues = () => {
    if (opt) {
      setAnswers([...answers, opt.id]);
      if (opt.id === quesData[quesNo].Answer) {
        setPoints((p) => p + 10);
        result.current.innerHTML = "Correct Answer! Go to next question";
      } else
        result.current.innerHTML =
          "Wrong Answer! The correct answer is " + quesData[quesNo].Answer;

      // opt.checked = false;
      [...options.current.children].map((option) => {
        option.children[1].disabled = true;
      });
      setGo(true);
    } else alert("Please Select the Answer");
  };

  //   Next button Handler: nextQues
  const nextQues = () => {
    if (go) {
      setLoading(true)
      pause();
      setTimeout(() => {
        setLoading(false)
        start();
        quesNo < quesData.length - 1
          ? setQuesNo((n) => n + 1)
          : (navigate("/Result"),
            dispatch(
              UpdateUser(User.id, User, points, answers, {
                min: minutes,
                sec: seconds,
              })
            ),
            pause());
        setGo(false);
        [...options.current.children].map((option) => {
          option.children[1].disabled = false;
        });
        setOpt(undefined);
        result.current.innerHTML = "";
      }, 2000);
    } else alert("Please Submit the Answer First");
  };

  return (
    <div className="main">
      <div className="Quiz">
        <div className="title">
          <h3 className="title-text"> Quiz App (H-Coder)</h3>
        </div>
        <hr className="divider" />
        <div className="quiz-desc">
          <div className="timer">
            <p>
              {minutes.toString().padStart(2, "0")} :{" "}
              {seconds.toString().padStart(2, "0")}
            </p>
          </div>
          <div className="quiz-name">
            Hello! <span className="quiz-user">"{User.Name}"</span>
          </div>
          <div className="quiz-no">
            Question <span id="QuesStart">{quesNo + 1}</span> of{" "}
            <span id="QuesLast">{quesData.length}</span>
          </div>
        </div>
        {quesData.length && !loading ? (
          <div className="quiz-ques">
            <h2 className="ques">
              Q{quesNo + 1}. {quesData[quesNo].question}
            </h2>
            <ul className="options" ref={options}>
              {Object.entries(quesData[quesNo].Options).map((key, opt) => {
                return (
                  <label key={opt} className="option" htmlFor={key[0]}>
                    <span className="opt">{key[0]}.</span>
                    <input
                      type={"radio"}
                      id={key[0]}
                      className="inp"
                      name={`option${quesData[quesNo].id}`}
                      onClick={(e) => setOpt(e.currentTarget)}
                    />
                    {key[1]}
                  </label>
                );
              })}
            </ul>
            <div className="subnext">
              <button
                className="submit"
                disabled={go}
                onClick={() => submitQues()}
              >
                Submit
              </button>
              <button className="next" onClick={() => nextQues()}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <div
            className="quiz-ques"
            style={{ backgroundImage: "url('/Images/loadQues.gif')" }}
          ></div>
        )}

        <hr className="divider" />
        <div className="result" ref={result}></div>
      </div>
    </div>
  );
};

export default Quiz;
