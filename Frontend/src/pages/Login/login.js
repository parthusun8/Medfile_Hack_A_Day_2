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
      <div className="login-container">
        <form className="form-for-login" onSubmit={(e) => e.preventDefault()}>
          <div className="name-cont">
            <span>Email Id</span>
            <input
              onChange={(e) => updateEmail(e.target.value)}
              type="text"
              name="name"
              id="name-input"
            />
          </div>
          <div className="pass-cont">
            <span>Password</span>
            <input
              onChange={(e) => updatePassword(e.target.value)}
              type={show?"text":"password"}
              name="pass"
              id="pass-input"
            />
            <i onClick={TogglePasswordVisibility}><AiFillEye/> Show password</i>
          </div>
          {/* <button onClick={send} className="sign-in-btn"> */}
          <center><button className="mt-4 sign-in-btn">
            Login
          </button></center>
        </form>
      </div>
    </div>
  );
}

export default Login;