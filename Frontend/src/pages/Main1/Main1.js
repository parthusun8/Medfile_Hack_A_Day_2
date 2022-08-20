import React, { useState } from "react";
import "./Main1.css";
const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [address, setAddress] = useState("");
  const [disability, setDisability] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medi, setMedi] = useState("");
  const [prev, setPrev] = useState("");
  const [operation, setOperation] = useState("");
  const [submit, setSubmit] = useState(false);
  const [upload, setUpload] = useState("");
  const [imgData,setImgData] =useState(null);
  const onChangePicture = (e) => {
    setUpload(e.target.files[0]);
    console.log('picture: ', upload);   
    const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="middleCon">
      <center><div className="mt-5 contact-container" style={{ width: "60%", border: "1px solid black", borderRadius: "30px"}}>
        <form className="form-for-signup m-3" onSubmit={(e) => e.preventDefault()}>
          {/* Upload photo */}
          <h1>Update Details</h1>
          <div className="Photo-upload">
            <div className="rounded-photo" >Upload photo<input type="file" style={{display:"none"}} id="myFile" onChange={onChangePicture} accept="image/jpg image/jpeg image/png"/></div>
          </div>
          {/* Name  */}
          <div className="name-cont">
            <span>Full name </span>
            <input
              type="text"
              name="name"
              id="name-input"
              onChange={(e) => setName(e.target.value)}
            />
            {/* <h1>{name}</h1> */}
          </div>
          {/* Age */}
          <div className="age-cont">
            <span>Age (in years)</span>
            <input
              type="number"
              name="age"
              id="number-input"
              onChange={(e) => setAge(e.target.value)}
            />
            {/* <h1>{age}</h1> */}
          </div>
          {/* Gender */}
          <div className="gender-cont">
            <span>Gender</span>
            <select type="text" onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not Specified">Not Specified</option>
            </select>
            {/* <h1>{gender}</h1> */}
          </div>
          {/* Height */}
          <div className="height-cont">
            <span>Height (in Centimeters)</span>
            <input
              type="number"
              name="Height"
              id="Height-input"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
            {/* <h1>{height}</h1> */}
          </div>
          {/* Weight */}
          <div className="weight-cont">
            <span>Weight (in Kilograms)</span>
            <input
              type="number"
              name="Weight"
              id="Weight-input"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
            {/* <h1>{weight}</h1> */}
          </div>
          {/*Address*/}
          <div className="Address">
            <span>Full Address</span>
            <input
              type="text"
              name="Address"
              id="Address-input"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            {/* <h1>{address}</h1> */}
          </div>
          {/*Major disabilities*/}
          <div className="Disability">
            <span>Disabilities (if, any)</span>
            <input
              type="text"
              name="disability"
              id="Disability-input"
              onChange={(e) => {
                setDisability(e.target.value);
              }}
            />
            {/* <h1>{disability}</h1> */}
          </div>
          {/*Allergies */}
          <div className="Allergies">
            <span>Allergies (if, any)</span>
            <input
              type="text"
              name="allergies"
              id="Allergies-input"
              onChange={(e) => setAllergies(e.target.value)}
            />
            {/* <h1>{allergies}</h1> */}
          </div>
          {/* Ongoing medications */}
          <div className="Medications">
            <span>Medications</span>
            <input
              type="text"
              name="Medications"
              id="Medications-input"
              onChange={(e) => setMedi(e.target.value)}
            />
            {/* <h1>{medi}</h1> */}
          </div>
          {/* Operations */}
          <div className="Operations">
            <span>Previous Operations Done (if, any)</span>
            <input
              type="text"
              name="Operations"
              id="Operations-input"
              onChange={(e) => setOperation(e.target.value)}
            />
            {/* <h1>{operation}</h1> */}
          </div>
          
          <div className="d-flex confirmSubmission">
            <label for="confirm" className="mt-3"><input required type="checkbox" id="confirm" name="confirm" value="Confirm-Submission" /> I do hereby declare that all the above information given by me are true to the best of my knowledge.</label>
          </div>
          <div className="d-flex acceptTerms">
            <label for="accept" className="mt-3"><input required type="checkbox" className="mt-1" id="accept" name="accept" value="Accept-Terms" /> I agree to the terms and conditions and also to the privacy policy of MedFile.</label>
          </div>
          <button className="mt-5 pt-3 pb-3 px-5 py-5">Submit</button>
        </form>
      </div></center>
    </div>
  );
};

export default Main;
