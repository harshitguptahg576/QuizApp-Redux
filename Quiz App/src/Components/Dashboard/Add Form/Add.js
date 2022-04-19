import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddQues } from "../../../Services/Actions";
import './Add.css'

const Add = ({ show, setShow, setLoading }) => {
  const dispatch = useDispatch();

  const [ques, setQues] = useState({
    question: "",
    Options: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    Answer: "A",
  });

  const addQuestion = () => {
    
    setLoading("flex")
    setTimeout(() => {
      dispatch(AddQues(ques));
    setShow("none");
    setLoading("none")
    }, 2000);
  };
  return (
    <div className="modal" style={{ display: show }}>
      <div className="add-form">
        <div className="add-question">
          <label htmlFor="ques">Question:</label>
          <textarea
            id="ques"
            className="ques-box"
            name="question"
            onChange={(e) =>
              setQues({ ...ques, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="add-option">
          <label htmlFor="opt1">Option A:</label>
          <input
            type={"text"}
            id="opt1"
            className="opt-box"
            name="A"
            onChange={(e) =>
              setQues({
                ...ques,
                ["Options"]: {
                  ...ques.Options,
                  [e.target.name]: e.target.value,
                },
              })
            }
          />

          <label htmlFor="opt2">Option B:</label>
          <input
            type={"text"}
            id="opt2"
            className="opt-box"
            name="B"
            onChange={(e) =>
              setQues({
                ...ques,
                ["Options"]: {
                  ...ques.Options,
                  [e.target.name]: e.target.value,
                },
              })
            }
          />

          <label htmlFor="opt3">Option C:</label>
          <input
            type={"text"}
            id="opt3"
            className="opt-box"
            name="C"
            onChange={(e) =>
              setQues({
                ...ques,
                ["Options"]: {
                  ...ques.Options,
                  [e.target.name]: e.target.value,
                },
              })
            }
          />

          <label htmlFor="opt4">Option D:</label>
          <input
            type={"text"}
            id="opt4"
            className="opt-box"
            name="D"
            onChange={(e) =>
              setQues({
                ...ques,
                ["Options"]: {
                  ...ques.Options,
                  [e.target.name]: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="add-ans">
          <label htmlFor="ans">Answer:</label>
          <input
            type={"text"}
            id="ans"
            className="ans-box"
            name="Answer"
            autoComplete="false"
            onChange={(e) =>
              setQues({ ...ques, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button
          className="add-ques-btn"
          onClick={() =>addQuestion()}
        >
          Add Question
        </button>
        <button className="cross" onClick={() => setShow("none")}>
          X
        </button>
      </div>
    </div>
  );
};

export default Add;
