import axios from "axios";
import {
  getAll,
  updateTime,
  register,
  startQuiz,
  userDetails,
  updateData,
  updatePoints,
  updateToken,
  updateAnswers,
  updateUser,
} from "../Constants";

export const Register = (name) => ({
  type: register,
  payload: name,
});

// Get All the Questions on start Quiz
export const StartQuiz = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/questions");
    const data = await res.data;
    dispatch({ type: startQuiz, payload: data });
  };
};

// Add Authentication by Token
export const UpdateToken = (token) => ({
  type: updateToken,
  payload: token,
});

// Clear the Session and Token: False
export const Logout = () => {
  sessionStorage.clear()
  return async (dispatch) => {
    dispatch(UpdateToken(false));
  };
};

// Get All the users for Registration and Login
export const GetUsersData = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/users");
    const data = await res.data;
    dispatch({ type: getAll, payload: data });
  };
};

// Add New User: Register Action
export const UpdateUsersData = (newuser) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3004/users/", newuser);
    const data = await res.data;
    dispatch({ type: updateData, payload: data });
  };
};

// Get The details of Login User
export const UserDetails = () => {
  const User = sessionStorage.getItem("LoggedUser");
  return {
    type: userDetails,
    payload: JSON.parse(User),
  };
};

// Updates the points
export const UpdatePoints = (points) => ({
  type: updatePoints,
  payload: points,
});

// Update the Submitted Answer
export const UpdateAnswers = (answers) => ({
  type: updateAnswers,
  payload: answers,
});

// Update the Time
export const UpdateTime = (time) => ({
  type: updateTime,
  payload: time,
});

// Update the User with submitted answers and points and time
export const UpdateUser = (id,updUser,points,answers,time) => {
  return async (dispatch) => {
    const res = await axios.put("http://localhost:3004/users/"+id, {...updUser,points: points, submittedAnswers: answers, time: time});
    const data = await res.data;
    dispatch({ type: updateUser, payload: data });
  };
};


// Admin Controls

// Add Question:
export const AddQues = (Ques) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3004/questions/", Ques);
    const data = await res.data;
    dispatch(StartQuiz());
  };
};

export const DeleteQues = (id) => {
  return async (dispatch) => {
    axios.delete("http://localhost:3004/questions/"+ id);
    dispatch(StartQuiz());
  };
};


export const Result = () => {};
