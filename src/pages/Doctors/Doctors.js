import React from "react";
import classes from "./Doctor.module.css";
import Appointment from "../../components/Appointment/Appointment";
//Doctors image import
import doctor1 from "../../images/doctor1.webp";
import doctor2 from "../../images/doctor2.webp";
import doctor3 from "../../images/doctor3.webp";
import doctor4 from "../../images/doctor4.webp";
import Departments from "../../components/Departments/Departments";
const Doctors = () => {
  /* Doctor Section */
  return (
    <>
      <section className={classes["doctor-area"]}>
        <div className="container">
          <h2 className="section-title mb-5">Specialized Doctors</h2>
          <div className="row gy-3">
            <div className="col-xl-3 col-md-6 col-xs-12">
              <div className={classes["single-doctor"]}>
                <div className={classes["img-area"]}>
                  <img src={doctor1} className="img-responsive" alt="doctor1" />
                  <div className={classes.social}>
                    <ul className="list-inline">
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-facebook-square ${classes.facebookIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-twitter ${classes.twitterIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-pinterest ${classes.pinterestIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-linkedin ${classes.linkedinIcon}`}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes["img-text"]}>
                  <h4>Dr. Michael Barley </h4>
                  <h5>Dental Hygienist </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-xs-12">
              <div className={classes["single-doctor"]}>
                <div className={classes["img-area"]}>
                  <img src={doctor2} className="img-responsive" alt="jonas" />
                  <div className={classes.social}>
                    <ul className="list-inline">
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-facebook-square ${classes.facebookIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-twitter ${classes.twitterIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-pinterest ${classes.pinterestIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-linkedin ${classes.linkedinIcon}`}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes["img-text"]}>
                  <h4>Dr. Ian Smith</h4>
                  <h5>CARDIOLOGIST</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-xs-12">
              <div className={classes["single-doctor"]}>
                <div className={classes["img-area"]}>
                  <img src={doctor3} className="img-responsive" alt="yahoo" />
                  <div className={classes.social}>
                    <ul className="list-inline">
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-facebook-square ${classes.facebookIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-twitter ${classes.twitterIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-pinterest ${classes.pinterestIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-linkedin ${classes.linkedinIcon}`}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes["img-text"]}>
                  <h4>Dr. Sara Parker </h4>
                  <h5>OPHTHALMOLOGIST</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-xs-12">
              <div className={classes["single-doctor"]}>
                <div className={classes["img-area"]}>
                  <img src={doctor4} className="img-responsive" alt="max" />
                  <div className={classes.social}>
                    <ul className="list-inline">
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-facebook-square ${classes.facebookIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-twitter ${classes.twitterIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-pinterest ${classes.pinterestIcon}`}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i
                            className={`fab fa-linkedin ${classes.linkedinIcon}`}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes["img-text"]}>
                  <h4>Dr. Lloyd Wilson </h4>
                  <h5>NEUROLOGIST</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Department component */}
      <Departments />
      {/* Appointment component */}
      <Appointment />
    </>
  );
};

export default Doctors;
