import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizReg from "./Components/QuizReg/QuizReg";
import Quiz from "./Components/Quiz/Quiz";
import QuizResult from "./Components/QuizResult/QuizResult";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import Dashboard from "./Components/Dashboard/Dashboard";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateToken } from "./Services/Actions";
import Admin from "./Components/Admin/Admin";

const Authentication = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Token.token);
  const isAdmin = useSelector((state) => state.LoginUser.admin);
  useLayoutEffect(() => {
    dispatch(UpdateToken(sessionStorage.getItem("token")));
  }, []);

  if (!token) return <LoginRegister />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<QuizReg />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Result" element={<QuizResult />} />
        <Route path="*" element={<QuizReg />} />
        {isAdmin ? (
          <Route path="/admin" element={<Dashboard />} />
        ) : (
          <Route path="/admin" element={<QuizReg />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Authentication;
