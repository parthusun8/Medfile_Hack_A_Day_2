import React from "react";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <header id="header" className="header fixed-top" data-scrollto-offset={0}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="logo d-flex  flex-grow"
          >
            <h1>
              <span style={{color: "red"}}>Med</span>File
            </h1>
          </a>
          <a className="justify-content-end" >
            <Link to="/login">
              <button className="Navbarbtn1 hover-border">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="Navbarbtn1 hover-border">
                Signup
              </button>
            </Link>
            
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
            src="assets/img/hospital.jpeg"
            className=" mt-5 pt-3 img-fluid"
            style={{ width: "40%" }}
          />
          <h2>
            Welcome to <span style={{color: "red"}}>Med</span>File
          </h2>
          <h3><strong><span style={{color: "red"}}>Med</span>File</strong> is an application which reduces the user's work of filling 
          an application form when visiting a new hospital. The basic details needed to fill an application form are collected and 
          converted into a QR which can be scanned at the hospitals.</h3>
          <h4>Patients <strong>need not wait</strong> any longer for the healthcare provider to print, scan and store your application 
          in their database - just show the QR code and they will get your basic details directly and can save it to their database, 
          if required.</h4> 
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div
              className="row g-4 g-lg-5"
              data-aos="fade-up"
            >
              <div className="col-lg-5">
                <div className="another-illustration">
                  {/* Another illustration goes here... */}
                  <img src="assets/img/doctor.png" style={{width: "500px"}} />
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">
                  The purpose of the project is to eliminate the waiting time of patients for new applications in a hospital.
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
                    <p className="fst-italic">
                      About Us goes here.....
                    </p>
                  </div>
                  {/* End of Tab 1 Content */}
                  <div className="tab-pane fade show" id="tab2">
                    <div className="d-flex align-items-center mt-4">
                      <p>Both the hospitals as well as the patients are benefitted by this application.
                        <ul>
                          <li>For <strong>Patients</strong>, this application proves to be very helpful as they need not waste their time
                           waiting in the hospital lobby for their application form to be processed during emergency. Using our application, 
                           the patient's basic details are directly made available to the hospital through a QR code
                            and thus, the form processing time is saved and the doctors can proceed with the operations.</li>
                            <li>For <strong>Hospitals</strong> too, this application proves to be very helpful.</li>
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
