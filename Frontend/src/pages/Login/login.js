import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.css";
import {AiFillEye} from "react-icons/ai";

function Login() {

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
    console.log(password);
  }
  
  // const navigate = Navigate;
  // async function send() {
  //   // alert("hi");
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       loginEmail: email,
  //       loginPass: password,
  //     }),
  //   };
  //   alert(email);
  //   alert(password);
  //   fetch("http://c3ea-103-4-222-252.ngrok.io/users/login", requestOptions).then(
  //     (response) => {
  //       const resp = response.json();
  //       alert(resp);
  //       // navigate("/");
  //     }
  //   );
  // }
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
              type="text"
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
            <i onClick={TogglePasswordVisibility} className="mx-3"><AiFillEye/> Show password</i>
          </div>
          {/* <button onClick={send} className="sign-in-btn"> */}
          <div className="mx-3 commentout mt-3"><i>New to MedFile? <a href="./signup">Create an account</a></i></div>
          <center>
          <button className="mt-4 mb-3 sign-in-btn">
            Login
          </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;