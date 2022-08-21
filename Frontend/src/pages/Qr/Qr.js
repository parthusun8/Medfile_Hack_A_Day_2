import React from "react";
import QRCode from "react-qr-code";
import "./Qr.css";
import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://mlh2022-medfile.herokuapp.com/";

function Qr() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Not Specified");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [address, setAddress] = useState("");
  const [disability, setDisability] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medications, setMedications] = useState("");
  const [operation, setOperation] = useState("");
  const [submit, setSubmit] = useState(false);
  const [upload, setUpload] = useState("");
  const [jsonData, setJson] = useState("");


  useEffect(() => {
    axios
      .post(baseURL + "users/getuser", {
        docId: localStorage.getItem("userId"),
      })
      .then((response) => {
        const data = response.data;
        console.log(data);

        updateName(data.firstName, data.middleName, data.lastName);
        if (data.age != undefined) {
          setAge(data.age);
        }
        if (data.gender != undefined) {
          setGender(data.gender);
        }
        if (data.height != undefined) {
          setHeight(data.height);
        }
        if (data.weight != undefined) {
          setWeight(data.weight);
        }
        if (data.address != undefined) {
          setAddress(data.address);
        }
        if (data.disability != undefined) {
          setDisability(data.disability);
        }
        if (data.allergies != undefined) {
          setAllergies(data.allergies);
        }
        if (data.medications != undefined) {
          setMedications(data.medications);
        }
        if(data.operation != undefined){
            setOperation(data.operation)
        }

        const jsonData = JSON.stringify({
            userId : localStorage.getItem("userId"),
            currentAge: age,
            sex: gender,
            height: height,
            weight: weight,
            address: address,
            disability: disability,
            allergies: allergies,
            medications: medications,
            operations: operation,
            // Submit:submit,
            // Picture:upload
          });
        setJson(jsonData);
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  },[]);


  function updateName(fn, mn, ln){
    if(mn!=""){
      setName(fn + " " + mn + " " + ln);
    }
    else{
      setName(fn + " " + ln);
    }
  }


  
  return (
    <div className="middle-qr-con">
        <div className="qr-container">
            <div className="mt-5"/>
            <h1 className="mx-3"><center>Your Qr is successfully</center><center>generated</center></h1>
            <div className="mt-5"/>
            <center> <QRCode value={jsonData} /> </center>
            <div/>
            <h2 className="mx-3 mt-5"><center>Don't share this QR to </center><center>anyone</center></h2>
        </div>
    </div>
  );
}

export default Qr;
