import React from "react";
import "./Signup.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiFillEye} from "react-icons/ai";
function Signup() {
  let navigate = useNavigate();
  function showImg() {
    setShowImage(!showImage);
  }
  const [showImage, setShowImage] = useState(false);
  const [show,setShow] =useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("M");
  const [location, setLocation] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [govtBody, setgovtBody] = useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  function selectNum() {
    var strUser = document.getElementById("gender-select").value;
    setGender(strUser);
  }

  function send() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: name,
        loginEmail: email,
        loginPass: password,
      }),
    };
    fetch("http://c3ea-103-4-222-252.ngrok.io/users/signup", requestOptions).then(
      (response) => {
        const resp = response.json();
        console.log(resp);
        navigate("/");
      }
    );
    // axios
    //   .post("http://192.168.195.84:8000/api/users/signup", requestOptions)
    //   .then((response) => console.log(response.data))
    //   .then(navigate("/"));
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
            <span className="mx-3 mt-5">Full Name</span>
            <input
              type="text"
              name="name"
              id="name-input"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* <div className="phone">
              <span>Phone Number</span>
              <input
                type="phone"
                name="phone"
                id="phone-input"
                autoComplete="off"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div> */}
            <div className="org">
            <span className="mx-3">Email</span>
            <input
              type="text"
              name="org-name"
              id="org-input"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass-cont">
            <span className="mx-3">Password</span>
            <input
              type={show?"text":"password"}
              name="pass"
              id="pass-input"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i onClick={TogglePasswordVisibility} className="show--password mx-3"><AiFillEye/> <span className="show--password">Show password</span></i>
          </div>
          {/* <div className="pass-cont">
            <span>Confirm Password</span>
            <input
                type={show?"text":"password"}
                name="pass"
                id="pass-input"
                autoComplete="off"
                onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <i onClick={TogglePasswordVisibility}><AiFillEye/> Show password</i>
          </div> */}
          <div className="mt-5">

          </div>
          <button onClick={send} className="sign-btn ">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;