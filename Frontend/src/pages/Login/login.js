import React, { useState } from "react";
import { useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import {AiFillEye} from "react-icons/ai";

import axios from "axios";

const baseURL = "https://mlh2022-medfile.herokuapp.com/";

// useEffect()

function Login() {

  const navigate = useNavigate();
  useEffect(() => {
    const a = localStorage.getItem("userId");
    if(a){
      navigate("/user")
    }
  },[]);

  function updateLocalStorage(params){
    localStorage.setItem("userId", params.userId);
    localStorage.setItem("Email", params.email);
  }

  const [show,setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const TogglePasswordVisibility=()=>{
    setShow(!show);
  };
  function updateEmail(data) {
    setEmail(data);
  }
  function updatePassword(data) {
    setPass(data);
    //console.log(password);
  }
  
  
  async function send() {
    console.log(email, password);
    axios
        .post(
          baseURL + "users/login", 
          {
            loginEmail: email,
            loginPass: password,
          }
        )
        .then((response) => {
          console.log("Logged In", response.data);
          updateLocalStorage({
            userId : response.data,
            email : email
          });
          navigate("/user");
        })
        .catch(e => {
          console.log(e.response.data);
        });
  }
  return (
    <div className="middle-login-con">
      
        <div className="login-container" style={{  border: "1px solid black", borderRadius: "30px"}}>
        <div className="mt-5"/>
        <h2 className="mt-3 mx-3">Welcome Back!</h2>
        <form className="form-for-login" onSubmit={(e) => e.preventDefault()}>
          <div className="name-cont mt-3">
            <span className="mx-3">Email Id</span>
            <input
              onChange={(e) => updateEmail(e.target.value)}
              type="email"
              name="name"
              id="name-input"
              placeholder="Enter your email"
            />
            
          </div>
          <div className="pass-cont mt-3">
            <span className="mx-3">Password</span>
            <input
              onChange={(e) => updatePassword(e.target.value)}
              type={show?"text":"password"}
              name="pass"
              id="pass-input"
              placeholder="Enter your password"
              className="mx-3"
            />
            <i onClick={TogglePasswordVisibility} className="mx-3 shw-pwd"><AiFillEye/> Show password</i>
          </div>
          
          

          <div className="mx-3 commentout mt-3">
            <i>
              New to MediFile? <Link to="/signup">Create an account</Link>
            </i>
          </div>

          <center>
          <button className="mt-4 mb-3 sign-in-btn" onClick={send}>
            Login
          </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;