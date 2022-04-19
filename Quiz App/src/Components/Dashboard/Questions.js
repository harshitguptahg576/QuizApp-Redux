import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteQues, StartQuiz } from "../../Services/Actions";
import Loading from "../Loading";
import Add from "./Add Form/Add";

const Questions = () => {
  const Questions = useSelector((state) => state.Quiz.quizData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartQuiz());
  }, []);
  const [show, setShow] = useState("none");
  const [loading, setLoading] = useState("none");

  const deleteQuestion = (id) => {
    
    setLoading("flex")
    setTimeout(() => {
      dispatch(DeleteQues(id));
    setLoading("none")
    }, 1000);
  };

  return (
    <div className="question-tab">
      <div className="add-ques">
        <button
          onClick={() => {
            setShow("flex");
          }}
          className="add-btn"
        >
          Add Question
        </button>
      </div>

      <div className="ques-details">
        <div className="card-header">
          <h2> All Questions ({Questions.length})</h2>
          <button>
            See all <span className="fas fa-arrow-right"></span>{" "}
          </button>
        </div>
        {Questions.map((Q, i) => (
          <div key={i} className="question">
          <button onClick={() => {deleteQuestion(Q.id)}} className="dlt-btn">
              Delete
            </button>
            <h2 className="ques">
              Q{i + 1}. {Q.question}
            </h2>
            
            <ul className="options">
              {Object.entries(Q.Options).map((key, opt) => {
                return (
                  <li key={opt} className={key[0] == Q.Answer ? "correct" : ""}>
                    <label>{key[1]}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <Add show={show} setShow={setShow} setLoading={setLoading} />
      <Loading show={loading} />
    </div>
  );
};

export default Questions;
