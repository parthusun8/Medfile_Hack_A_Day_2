import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Main.css";
import axios from "axios";


const baseURL = "https://mlh2022-medfile.herokuapp.com/";


const Main = () => {

  useEffect(() => {
    const a = localStorage.getItem("img");
    if (a) {
      setImg(a);
    } 
  }, []);


  async function getAndSetUserDetails(userId){
    axios
      .post(baseURL + "users/getuser", {
        docId: userId,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);

        updateName(data.firstName, data.middleName, data.lastName);
        if(data.currentAge){
          setAge(data.currentAge);
        }
        if(data.gender!=undefined){
          setGender(data.gender);
        }
        if(data.height!=undefined){
          setHeight(data.height);
        }
        if(data.weight!=undefined){
          setWeight(data.weight);
        }
        if(data.address!=undefined){
          setAddress(data.address);
        }
        if(data.disability!=undefined){
          setDisability(data.disability);
        }
        if(data.allergies!=undefined){
          setAllergies(data.allergies);
        }
        if(data.medications!=undefined){
          setMedications(data.medications);
        }

      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  }
  const navigate = useNavigate();
  useEffect(() => {
    const a = localStorage.getItem("userId");
    if(a){
      getAndSetUserDetails(a);
    }
    else{
      navigate("/login");
    }
  },[]);

  function emptyLocalStorage(){
    localStorage.clear();
    navigate("/login");
  }

  function updateName(fn, mn, ln){
    if(mn!=""){
      setName(fn + " " + mn + " " + ln);
    }
    else{
      setName(fn + " " + ln);
    }
  }

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
  const [img, setImg] = useState();

  return (
    


    <>
      <button className="Navbarbtn" onClick={emptyLocalStorage}>Logout</button>
      <div className="middleCon main1">
      <div style={{ height: "100px"}}></div>
      {/* <button style={{float: "left"}}>Update Details</button> */}
      <center><div className="pt-5 contact-container updateForm" style={{ width: "60%", border: "1px solid black", borderRadius: "30px"}}>
        <form className="form-for-signup m-3" onSubmit={(e) => e.preventDefault()}>
          
          <h1>Patient Details</h1>
          <div className="Photo-upload">
          {img ? <img src={img} className="img-photo"/> : <div className="rounded-photo"></div>}
            
          </div>

          <center>
          <table className="mt-5 mb-5" style={{borderRadius: "20px"}}>
            <tr>
                <td className="p-5">Name</td>
                <td style={{width: "60%"}} id="saved-name">{name}</td>
            </tr>
            <tr>
                <td className="p-5">Age</td>
                <td style={{width: "60%"}} id="saved-age">{age}</td>
            </tr>
            <tr>
                <td className="p-5">Gender</td>
                <td style={{width: "60%"}} id="saved-gender">{gender!=""?gender:"Update Profile to update gender"}</td>
            </tr>
            <tr>
                <td className="p-5">Height (cm)</td>
                <td style={{width: "60%"}} id="saved-height">{height!=""?height:"Update Profile to update height"}</td>
            </tr>
            <tr>
                <td className="p-5">Weight (kg)</td>
                <td style={{width: "60%"}} id="saved-weight">{weight!=""?weight:"Update Profile to update weight"}</td>
            </tr>
            <tr>
                <td className="p-5">Address</td>
                <td style={{width: "60%"}} className="p-5" id="saved-address">{address!=""?address:"Update Profile to add address"}</td>
            </tr>
            <tr>
                <td className="p-5">Disabilities</td>
                <td style={{width: "60%"}} id="saved-disabilities">{disability!=""?disability:"Update Profile to add disability details"}</td>
            </tr>
            <tr>
                <td className="p-5">Allergies</td>
                <td style={{width: "60%"}} id="saved-allergies">{allergies!=""?allergies:"Update Profile to add allergies details"}</td>
            </tr>
            <tr>
                <td className="p-5">Ongoing medications/ailments</td>
                <td style={{width: "60%"}} className="p-5" id="saved-medications">{medications!=""?medications:"Update Profile to add Medication details"}</td>
            </tr>
            <tr>
                <td className="p-5">Previous operations done</td>
                <td style={{width: "60%"}} className="p-5" id="saved-operations">{operation!=""?operation:"Update Profile to add operation details"}</td>
            </tr>
          </table></center>
          {/* jspdf library can be used */}
          {/* <button className="mt-5 pt-3 pb-3 px-5 py-5" >Save as Pdf</button> */}
          <Link to="/user/update">
              <button className="Navbarbtn1">
                Add/Update Details
              </button>
            </Link>
            <Link to="/qr" >
                <button className="mt-5 pt-3 pb-3 px-5 py-5">
                  Generate QR
                </button>
              </Link>
        </form>
      </div></center>
      <div style={{ height: "100px"}}></div>
    </div>
    </>
    
  );
};

export default Main;
