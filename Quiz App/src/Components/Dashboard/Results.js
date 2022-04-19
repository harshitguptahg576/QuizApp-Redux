import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartQuiz } from "../../Services/Actions";

const Results = () => {
  const Users = useSelector((state) => state.Users.userData);
  const Questions = useSelector((state) => state.Quiz.quizData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartQuiz());
  }, []);

  const showDetails = (target) => {
    const userResult = target.parentNode.nextSibling;
    [...userResult.classList].includes("active")
      ? userResult.classList.remove("active")
      : userResult.classList.add("active");
  };
  return (
    <div className="result-tab">
      <div className="result-details">
        <div className="card-header res">
          <h2> Submitted Result</h2>
        </div>
        {Users.map((U, i) => (
          <div key={i} className="card">
            <div className="card-header">
              <h2>{U.Name}</h2>
              <h3>
                {U.points ? (
                  <span className="points">
                    {((U.points / Questions.length) * 10).toFixed(2)} %
                  </span>
                ) : (
                  <span>Not Submitted</span>
                )}
              </h3>
              <button onClick={(e) => showDetails(e.currentTarget)}>
                See all <span className="fas fa-arrow-right"></span>{" "}
              </button>
            </div>
            <div className="user-Result">
              {U.submittedAnswers ? (
                Questions.map((Q, Qno) => (
                  <div key={Qno} className="question">
                    <h2 className="ques">
                      Q{Qno + 1}. {Q.question}
                    </h2>
                    <ul className="options">
                      {Object.entries(Q.Options).map((key, opt) => {
                        return (
                          <li
                            key={opt}
                            className={
                              U.submittedAnswers[Qno] == Q.Answer
                                ? key[0] == Q.Answer
                                  ? "correct"
                                  : ""
                                : key[0] == Q.Answer
                                ? "green"
                                : key[0] == U.submittedAnswers[Qno]
                                ? "red"
                                : ""
                            }
                          >
                            <label>{key[1]}</label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              ) : (
                <div></div>
              )}
              <div className="summary">
                <div className="correct-ans correct">
                  Correct Answers: {U.points / 10}
                </div>
                <div className="wrong-ans red">
                  Wrong Answers: {Questions.length - U.points / 10}
                </div>
                <div className="correct-ans green">
                  Result: {((U.points / Questions.length) * 10).toFixed(2)} %
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
