import React from "react";
import "./Signup.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiFillEye} from "react-icons/ai";
import axios from "axios";


const baseURL = "https://mlh2022-medfile.herokuapp.com/";

function Signup() {

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
    localStorage.setItem("Name", params.name);
  }
  
  const [show,setShow] =useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  async function send() {
    console.log(email, password);
    axios
        .post(
          baseURL + "users/signup", 
          {
            name: name,
            loginEmail: email,
            loginPass: password,
          }
        )
        .then((response) => {
          console.log("Signed Up", response?.data);
          updateLocalStorage({
            userId : response.data,
            email : email,
            name : name,
          });
          navigate("/user");
        }).catch(e => {
          console.log(e?.response?.data);
        });;
  }
  const TogglePasswordVisibility=()=>{
    setShow(show?false:true);
  };
  return (
    <div className="middle-signup-con">
      <div className="signup-container mt-4 mb-5">
        <form className="form-for-signup" onSubmit={(e) => e.preventDefault()}>
          <div className="name-cont mt-5">
            <div className="CreateAccount mx-3"><span className="welcome">Welcome</span><br /> to <span style={{ color: "red" }}>Med</span>File</div>
            <span className="mx-3 mt-5"> Name </span>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              id="name-input"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
            <div className="org">
            <span className="mx-3"> Email </span>
            <input
              type="text"
              placeholder="Enter your email"
              name="org-name"
              id="org-input"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass-cont">
            <span className="mx-3"> Password </span>
            <input
              type={show?"text":"password"}
              name="pass"
              placeholder="Set a strong password"
              id="pass-input"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i onClick={TogglePasswordVisibility} className="show--password mx-3"><AiFillEye/> <span className="show--password">Show password</span></i>
          </div>

          <div className="mx-3 commentout mt-3">
            <i>
              Existing User? <Link to="/login">Sign In Here</Link>
            </i>
          </div>
          
          <button onClick={send} className="sign-btn mt-5">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;