import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkTheUserAction } from "../store/actions/actions";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [users, setUsers] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  

  const clearForm = () => {
    setUsers({
      userName: "",
      email: "",
      password: "",
    });
  };
  const loginState = useSelector((state) => state.users);
  console.log(loginState);

  const logged_In = loginState.find(
    (x) => x.email === users.email && x.password === users.password
  );
  // console.log("logged_ in ", logged_In)

  const handleChange = (e) => {
    let newUser = { ...users };
    newUser[e.target.name] = e.target.value;
    setUsers(newUser);
  };

  const { userName, email, password } = users;

  
 
 

  const SignInUser = (users) => {
    if (logged_In) {
      dispatch(checkTheUserAction(users));
      // console.log("user is present in state !!!");
      toast.success("Login successfully ! ")
     
     
      
      
    } else {
      // console.log("user is not present in state");
      toast.warning("LogIn Failed / Sign Up First  ")
    }
    clearForm();
  };
  return (
    <div>
        
      <form>
        <div className="box-center p-2">
          <h3 className="py-3 ">Login Here</h3>
          <input
            type="text"
            name="userName"
            className="input-field"
            placeholder="User Name "
            value={userName}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="password"
            name="password"
            className="input-field"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <div className="">
            <button
              className="btn btn-primary my-2"
              type="button"
              onClick={() => {
                SignInUser(users);
              }}
            >
              Sign In
            </button>
          </div>
          <div className="">
            <Link to={"/register"} className="text-decoration-none">
              {" "}
              <p className="signUp-link">SignUp For Shop-Hub </p>
            </Link>
          </div>
        </div>
    
      </form>
      <ToastContainer  />  
    </div>
  );
};

export default Login;
