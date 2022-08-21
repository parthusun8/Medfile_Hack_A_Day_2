import React, { useEffect } from "react";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function About() {
  const [userExists, setExistence] = useState(false);
  const [userName, setName] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const a = localStorage.getItem("userId");
    if (a) {
      console.log("User Exists");
      setExistence(true);
      setName(localStorage.getItem("Email").split("@")[0]);
    } else {
      setExistence(false);
    }
  }, []);

  function emptyLocalStorage() {
    localStorage.clear();
    setExistence(false);
  }

  const auth_buttons = () => {
    return (
      <>
        <Link to="/login">
          <button className="Navbarbtn1 hover-border">Login</button>
        </Link>
        <Link to="/signup">
          <button className="Navbarbtn1 hover-border">Signup</button>
        </Link>
      </>
    );
  };

  return (
    <div>
      <header id="header" className="header fixed-top" data-scrollto-offset={0}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex  flex-grow">
            <h1 style={{ fontWeight: "700" }}>
              <span style={{ color: "red" }}>Med</span>File
            </h1>
          </a>
          <a className="justify-content-end">
            {userExists ? (
              <>
                <Link to="/">
                  <Link to="/user">
                    <button className="Navbarbtn1 hover-border">
                      Your Profile
                    </button>
                  </Link>
                  <button
                    className="Navbarbtn1 hover-border"
                    onClick={emptyLocalStorage}
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              auth_buttons()
            )}
          </a>
        </div>
      </header>
      {/* End Header */}
      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <img
            src="assets/img/hospital.png"
            className=" mt-5 pt-3 img-fluid"
            style={{ width: "40%" }}
          />
          <h2 className="mt-4" style={{ fontWeight: "700" }}>
            Welcome to <span style={{ color: "red" }}>Med</span>File,{" "}
            {userName != "" ? userName : ""}
          </h2>
          <h3>
            On an average, more than{" "}
            <strong style={{ color: "red" }}>15 minutes</strong> of time is
            wasted by patients waiting for filling an application form or
            registering for an operation.
          </h3>
          <h4>
            <i>
              There is never enough time to do everything but there is always
              enough time to do the most important things.
            </i>
          </h4>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row g-4 g-lg-5" data-aos="fade-up">
              <div className="col-lg-5">
                <div className="another-illustration">
                  {/* Another illustration goes here... */}
                  <img src="assets/img/doctor.png" style={{ width: "500px" }} />
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">
                  The <strong>main purpose</strong> of the project is to
                  eliminate the waiting time of patients for new applications in
                  a hospital.
                </h3>
                <ul className="nav nav-pills mb-3">
                  <li>
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#tab1"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                      Benefits
                    </a>
                  </li>
                </ul>
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p style={{ fontSize: "22px" }} className="fst-italic">
                      <ul>
                        <li>
                          <strong>
                            <span style={{ color: "red" }}>Med</span>File
                          </strong>{" "}
                          is an application which reduces the patient's work of
                          filling an application or registration form whenever
                          visiting a new hospital.
                        </li>
                        <li>
                          The basic user details that are needed to fill an
                          application form are{" "}
                          <strong>already collected</strong> and converted into
                          a QR which can be scanned at the hospitals.
                        </li>
                        <li>
                          Patients <strong>need not wait</strong> any longer for
                          the healthcare provider to print, scan and store your
                          application in their database and the patients can
                          thus be treated at the earliest.
                        </li>
                      </ul>
                    </p>
                  </div>
                  {/* End of Tab 1 Content */}
                  <div className="tab-pane fade show" id="tab2">
                    <div className="d-flex align-items-center mt-4">
                      <p style={{ fontSize: "22px" }}>
                        Both the hospitals as well as the patients are
                        benefitted a lot by this application.
                        <ul>
                          <li>
                            For <strong>Patients</strong>, this application
                            proves to be handy and very helpful as they need not
                            waste their time waiting in the hospital lobby for
                            their application form to be processed during
                            emergency. Using our application, the patient's
                            basic details are directly made available to the
                            hospital through a QR code and thus, the form
                            processing time is saved and the doctors can proceed
                            with the operations.
                          </li>

                          <li>
                            For <strong>Hospitals</strong> too, this application
                            proves to be very helpful as they need not
                            accomodate more patients in the lobby. The patients
                            can be treated at the earliest and at any given
                            time, there will not be much crowd at the hospital.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  {/* End Tab 2 Content */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </main>
    </div>
  );
}

export default About;
