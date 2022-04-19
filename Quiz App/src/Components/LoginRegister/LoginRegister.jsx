import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUsersData,
  UpdateToken,
  UpdateUsersData,
} from "../../Services/Actions";
import "./LoginRegister.css";
import Loading from "../Loading";

// Main Component Function
const LoginRegister = () => {
  const container = useRef(null);

  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.Users.userData);

  useEffect(() => {
    dispatch(GetUsersData());
  }, []);

  //   LogIn User
  const [loginUser, setLoginUser] = useState({
    Email: "",
    Password: "",
  });

  //   New User
  const [newuser, setNewUser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  //   Loading spin
  const [loading, setLoading] = useState("none");

  //   Validate the input fields
  const validate = (name, email, pwd) => {
    if (!name) return false;
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) return false;
    if (!pwd) return false;
    return true;
  };

  //   Register Function(): Called by Sign Up Button
  const Register = (e) => {
    e.preventDefault();

    if (validate(newuser.Name, newuser.Email, newuser.Password)) {
      // Check email should not already exist...
      let exist = false;
      usersData.forEach((registerUser) => {
        if (registerUser.Email === newuser.Email) exist = true;
      });
      if (exist) alert("Email already Registered");
      else {
        setLoading("flex");
        dispatch(UpdateUsersData(newuser));
        setTimeout(() => {
          setLoading("none");
          alert("User Registered Successfully");
        }, 1000);
      }
      container.current.classList.remove("right-panel-active");
    } else alert("Fill All the Fields Correctly");
  };

  //   Login Function(): Called by Sign in Button
  const Login = (e) => {
    e.preventDefault();

    if (validate(true, loginUser.Email, loginUser.Password)) {
      // Check email should not already exist...
      let exist = false;
      usersData.forEach((registerUser) => {
        if (
          registerUser.Email === loginUser.Email &&
          registerUser.Password === loginUser.Password
        ) {
          exist = true;
          setLoading("flex");
          setTimeout(() => {
            setLoading("none");
            alert("Logged In Successfully");
            sessionStorage.setItem("token", true);
            sessionStorage.setItem("LoggedUser", JSON.stringify(registerUser));
            dispatch(UpdateToken(true));
          }, 1000);
        }
      });
      if (!exist) {
        alert("Enter your correct Email & Password ");
        container.current.classList.add("right-panel-active");
      }
    } else alert("Fill All the Fields Correctly");
  };

  return (
    <div className="main">
      <div className="container login" ref={container}>
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={(e) =>
                setNewUser({ ...newuser, [e.target.name]: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={(e) =>
                setNewUser({ ...newuser, [e.target.name]: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              onChange={(e) =>
                setNewUser({ ...newuser, [e.target.name]: e.target.value })
              }
              required
            />
            <button onClick={Register}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={(e) =>
                setLoginUser({
                  ...loginUser,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              onChange={(e) =>
                setLoginUser({
                  ...loginUser,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
            <a href="#" className="forget">
              Forgot your password?
            </a>
            <button onClick={Login}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Login with your personal info...</p>
              <button
                className="ghost"
                onClick={() =>
                  container.current.classList.remove("right-panel-active")
                }
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details...</p>
              <button
                className="ghost"
                onClick={() =>
                  container.current.classList.add("right-panel-active")
                }
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loading show={loading} />
    </div>
  );
};

export default LoginRegister;
