import React, { useState, useEffect } from "react";
import "./Main1.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const baseURL = "https://mlh2022-medfile.herokuapp.com/";

function Main1() {
  async function getAndSetUserDetails(userId) {
    axios
      .post(baseURL + "users/getuser", {
        docId: userId,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);

        updateName(data.firstName, data.middleName, data.lastName);
        if (data.currentAge != undefined) {
          setAge(data.currentAge);
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
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  }

  function updateName(fn, mn, ln) {
    if (mn != "") {
      setName(fn + " " + mn + " " + ln);
    } else {
      setName(fn + " " + ln);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const a = localStorage.getItem("userId");
    if (a) {
      getAndSetUserDetails(a);
    } else {
      navigate("/login");
    }
  }, []);

  function emptyLocalStorage() {
    localStorage.clear();
    navigate("/login");
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
  const [submit, setSubmit] = useState(false);
  const [upload, setUpload] = useState("");
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    document.getElementById("myFile").classList.add("active");
    localStorage.setItem("img", URL.createObjectURL(file));
  };


  function send() {
    const params = {
      userId: localStorage.getItem("userId"),
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
    };

    axios
      .post(baseURL + "users/updateuser", params)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  }
  return (
    <>
      <button className="Navbarbtn" onClick={emptyLocalStorage}>
        Logout
      </button>

      <div className="middleCon main1">
        <div style={{ height: "100px" }}></div>
        <center>
          <div
            className="pt-5 contact-container updateForm"
            style={{
              width: "60%",
              border: "1px solid black",
              borderRadius: "30px",
            }}
          >
            <form
              className="form-for-signup m-3"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Upload photo */}
              <h1>Update Details</h1>
              <div className="Photo-upload">
                {img ? (
                  <img src={img} alt="" className="img-photo" />
                ) : (
                  <>
                    <>Upload your picture</>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      id="myFile"
                      name="filename"
                      onChange={onImageChange}
                    />
                  </>
                )}
              </div>
              {/* Name  */}
              <div className="name-cont mt-3">
                <span> Name </span>
                <input
                  type="text"
                  name="name"
                  id="name-input"
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {/* <h1>{name}</h1> */}
              </div>
              {/* Age */}
              <div className="age-cont mt-1">
                <span> Age </span>
                <input
                  type="number"
                  name="age"
                  id="number-input"
                  placeholder="Enter your age (in years)"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
                {/* <h1>{age}</h1> */}
              </div>
              {/* Gender */}
              <div className="gender-cont mt-1">
                <span> Gender </span>
                <select
                  type="text"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                >
                  <option value="NA">Not Specified</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {/* <h1>{gender}</h1> */}
              </div>
              {/* Height */}
              <div className="height-cont mt-1">
                <span> Height </span>
                <input
                  type="number"
                  name="Height"
                  id="Height-input"
                  placeholder="Enter your height (in Centimeters)"
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                  value={height}
                />
                {/* <h1>{height}</h1> */}
              </div>
              {/* Weight */}
              <div className="weight-cont mt-1">
                <span> Weight </span>
                <input
                  type="number"
                  name="Weight"
                  id="Weight-input"
                  placeholder="Enter your weight (in Kilograms)"
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                  value={weight}
                />
                {/* <h1>{weight}</h1> */}
              </div>
              {/*Address*/}
              <div className="Address mt-1">
                <span> Address </span>
                <input
                  type="text"
                  name="Address"
                  id="Address-input"
                  placeholder="Enter your full address with postal code"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                />
                {/* <h1>{address}</h1> */}
              </div>
              {/*Major disabilities*/}
              <div className="Disability mt-1">
                <span> Disabilities </span>
                <input
                  type="text"
                  name="disability"
                  id="Disability-input"
                  placeholder="Enter your disabilities (if, any)"
                  onChange={(e) => {
                    setDisability(e.target.value);
                  }}
                  value={disability}
                />
                {/* <h1>{disability}</h1> */}
              </div>
              {/*Allergies */}
              <div className="Allergies mt-1">
                <span> Allergies </span>
                <input
                  type="text"
                  name="allergies"
                  id="Allergies-input"
                  placeholder="Enter your allergies (if, any)"
                  onChange={(e) => setAllergies(e.target.value)}
                  value={allergies}
                />
                {/* <h1>{allergies}</h1> */}
              </div>
              {/* Ongoing medications */}
              <div className="Medications mt-1">
                <span> Medications </span>
                <input
                  type="text"
                  name="Medications"
                  id="Medications-input"
                  placeholder="Enter your ongoing medications (if, any)"
                  onChange={(e) => setMedications(e.target.value)}
                  value={medications}
                />
                {/* <h1>{medi}</h1> */}
              </div>
              {/* Operations */}
              <div className="Operations mt-1">
                <span> Previous Operations Done </span>
                <input
                  type="text"
                  name="Operations"
                  id="Operations-input"
                  placeholder="Enter the previous operations Done (if, any)"
                  onChange={(e) => setOperation(e.target.value)}
                  value={operation}
                />
                {/* <h1>{operation}</h1> */}
              </div>

              <div className="d-flex confirmSubmission">
                <label htmlFor="confirm" className="mt-3">
                  <input
                    required
                    type="checkbox"
                    id="confirm"
                    name="confirm"
                    value="Confirm-Submission"
                  />{" "}
                  I do hereby declare that all the above information given by me
                  are true to the best of my knowledge.
                </label>
              </div>
              <div className="d-flex acceptTerms">
                <label htmlFor="accept" className="mt-3">
                  <input
                    required
                    type="checkbox"
                    className="mt-1"
                    id="accept"
                    name="accept"
                    value="Accept-Terms"
                  />{" "}
                  I agree to the terms and conditions and also to the privacy
                  policy of MedFile.
                </label>
              </div>
              <Link to="/user">
                <button className="mt-5 pt-3 pb-3 px-5 py-5" onClick={send}>
                  Save Changes
                </button>
              </Link>
            </form>
          </div>
        </center>
        <div style={{ height: "100px" }}></div>
      </div>
    </>
  );
}

export default Main1;
