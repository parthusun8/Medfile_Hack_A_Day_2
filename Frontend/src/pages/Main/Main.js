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
  const [medications, setMedications] = useState("");
  const [operation, setOperation] = useState("");
  const [submit, setSubmit] = useState(false);
  const [upload, setUpload] = useState("");

    // Commented send function as there is nothing to send.
    // function send() {
    //   const requestOptions ={
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify({
    //       fullName:name,
    //       currentAge:age,
    //       Sex:gender,
    //       Height:height,
    //       Weight:weight,
    //       Address:address,
    //       Disability:disability,
    //       Allergies:allergies,
    //       Medications:medications,
    //       Operations:operation,
    //       Submit:submit,
    //       Picture:upload
    //     })
    //   }
    //   console.log(requestOptions.body);
    // }
  return (
    <div className="middleCon main1">
      <div style={{ height: "100px"}}></div>
      <a><button>Update Details</button></a>
      <center><div className="pt-5 contact-container updateForm" style={{ width: "60%", border: "1px solid black", borderRadius: "30px"}}>
        <form className="form-for-signup m-3" onSubmit={(e) => e.preventDefault()}>
          {/* <table>
            <tr>
                <td>Hey</td>
                <td>Hey1</td>
            </tr>
            <tr>
                <td>123</td>
                <td>1234</td>
            </tr>
          </table> */}
          <h1>Patient Details</h1>
          <div className="Photo-upload">
            <div className="rounded-photo"></div>
          </div>

          <table>
            <tr>
                <td>Name</td>
                <td id="saved-name">Anonymous</td>
            </tr>
            <tr>
                <td>Age</td>
                <td id="saved-age">25</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td id="saved-gender">Male</td>
            </tr>
            <tr>
                <td>Age</td>
                <td id="saved-age">25</td>
            </tr>
            <tr>
                <td>Height</td>
                <td id="saved-age">25</td>
            </tr>
          </table>
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
            />
            {/* <h1>{operation}</h1> */}
          </div>
          {/* jspdf library can be used */}
          {/* <button className="mt-5 pt-3 pb-3 px-5 py-5" >Save as Pdf</button> */}
        </form>
      </div></center>
      <div style={{ height: "100px"}}></div>
    </div>
  );
};

export default Main;
