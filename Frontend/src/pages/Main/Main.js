import React, { useState } from "react";
import "./Main.css";
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
  return (
    <div className="middleCon">
      <div className="contact-container">
        <form className="form-for-signup" onSubmit={(e) => e.preventDefault()}>
          {/* Upload photo */}
          <h1>Contact Form</h1>
          <div className="Photo-upload">
            
            <div className="rounded-photo">Upload photo<input type="file" id="myFile" name="filename"/></div>
          </div>
          {/* Name  */}
          <div className="name-cont">
            <span>Full name</span>
            <input
              type="text"
              name="name"
              id="name-input"
              onChange={(e) => setName(e.target.value)}
            />
            <h1>{name}</h1>
          </div>
          {/* Phone No. */}
          <div className="phone-cont">
            <span>Age</span>
            <input
              type="number"
              name="age"
              id="number-input"
              onChange={(e) => setAge(e.target.value)}
            />
            <h1>{age}</h1>
          </div>
          {/* Gender */}
          <div className="gender-cont">
            <span>Gender</span>
            <select type="text" onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not Specified">Not Specified</option>
            </select>
            <h1>{gender}</h1>
          </div>
          {/* Height */}
          <div className="height-cont">
            <span>Height</span>
            <input
              type="number"
              name="Height"
              id="Height-input"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
            <h1>{height}</h1>
          </div>
          {/* Weight */}
          <div className="weight-cont">
            <span>Weight</span>
            <input
              type="number"
              name="Weight"
              id="Weight-input"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
            <h1>{weight}</h1>
          </div>
          {/*Address*/}
          <div className="Address">
            <span>Address</span>
            <input
              type="text"
              name="Address"
              id="Address-input"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <h1>{address}</h1>
          </div>
          {/*Major disabilities*/}
          <div className="Disability">
            <span>Disability</span>
            <input
              type="text"
              name="disability"
              id="Disability-input"
              onChange={(e) => {
                setDisability(e.target.value);
              }}
            />
            <h1>{disability}</h1>
          </div>
          {/*Allergies */}
          <div className="Allergies">
            <span>Allergies</span>
            <input
              type="text"
              name="allergies"
              id="Allergies-input"
              onChange={(e) => setAllergies(e.target.value)}
            />
            <h1>{allergies}</h1>
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
            <h1>{medi}</h1>
          </div>
          {/* previous disabilities */}
          <div className="Disabilites">
            <span>Disabilites</span>
            <input
              type="text"
              name="Disabilities"
              id="Disabilities-input"
              onChange={(e) => setPrev(e.target.value)}
            />
            <h1>{prev}</h1>
          </div>
          {/* Operations */}
          <div className="Operations">
            <span>Operations</span>
            <input
              type="text"
              name="Operations"
              id="Operations-input"
              onChange={(e) => setOperation(e.target.value)}
            />
            <h1>{operation}</h1>
          </div>
          <input type="checkbox" id="confirm" name="confirm" value="Confirm-Submission" />
          <label for="confirm"> I hereby accept that all</label>
        </form>
      </div>
    </div>
  );
};

export default Main;
