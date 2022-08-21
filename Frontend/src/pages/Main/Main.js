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
                <td className="p-5">Hey</td>
                <td className="p-5">Hey1</td>
            </tr>
            <tr>
                <td className="p-5">123</td>
                <td className="p-5">1234</td>
            </tr>
          </table> */}
          <h1>Patient Details</h1>
          <div className="Photo-upload">
            <div className="rounded-photo"></div>
          </div>

          <center>
          <table className="mt-5 mb-5" style={{borderRadius: "20px"}}>
            <tr>
                <td className="p-5">Name</td>
                <td style={{width: "60%"}} id="saved-name">Anonymous</td>
            </tr>
            <tr>
                <td className="p-5">Age</td>
                <td style={{width: "60%"}} id="saved-age">25</td>
            </tr>
            <tr>
                <td className="p-5">Gender</td>
                <td style={{width: "60%"}} id="saved-gender">Male</td>
            </tr>
            <tr>
                <td className="p-5">Age</td>
                <td style={{width: "60%"}} id="saved-age">25</td>
            </tr>
            <tr>
                <td className="p-5">Height (cm)</td>
                <td style={{width: "60%"}} id="saved-height">152</td>
            </tr>
            <tr>
                <td className="p-5">Weight (kg)</td>
                <td style={{width: "60%"}} id="saved-weight">75</td>
            </tr>
            <tr>
                <td className="p-5">Address</td>
                <td style={{width: "60%"}} className="p-5" id="saved-address">Chennai - 600059, Tamil nadu, India</td>
            </tr>
            <tr>
                <td className="p-5">Disabilities</td>
                <td style={{width: "60%"}} id="saved-disabilities">Nil</td>
            </tr>
            <tr>
                <td className="p-5">Allergies</td>
                <td style={{width: "60%"}} id="saved-allergies">Nil</td>
            </tr>
            <tr>
                <td className="p-5">Ongoing medications/ailments</td>
                <td style={{width: "60%"}} className="p-5" id="saved-medications">Nil</td>
            </tr>
            <tr>
                <td className="p-5">Previous operations done</td>
                <td style={{width: "60%"}} className="p-5" id="saved-operations">Nil</td>
            </tr>
          </table></center>
          {/* jspdf library can be used */}
          {/* <button className="mt-5 pt-3 pb-3 px-5 py-5" >Save as Pdf</button> */}
        </form>
      </div></center>
      <div style={{ height: "100px"}}></div>
    </div>
  );
};

export default Main;
