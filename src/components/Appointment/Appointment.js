import React from "react";
import { MdPhone } from "react-icons/md";
import classes from "./Appointment.module.css";
const Appointment = () => {
  return (
    <section className={classes.appointment}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className={classes["opening-hours"]}>
              <h2 className="d-flex align-items-center">Opening Hours</h2>
              <ul className="p-0 m-0">
                <li>
                  Monday - Thursday <span>8.00 - 19.00</span>
                </li>
                <li>
                  Friday <span>8.00 - 18.30</span>
                </li>
                <li>
                  Saturday <span>9.30 - 17.00</span>
                </li>
                <li>
                  Sunday <span>9.30 - 15.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
            <div className={classes["emergency-box"]}>
              <h2 className="d-flex align-items-center">Emergency</h2>
              <div className={classes["call-btn"]}>
                <button
                  className={`d-flex justify-content-center align-items-center ${classes["gradient-bg"]}`}
                  href="/"
                >
                  <MdPhone />
                  +34 586 778 8892
                </button>
              </div>
              <p>
                A medical specialty concerned with the care and treatment of
                acutely ill or injured patients who need immediate medical
                attention.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mt-5 mt-lg-0">
            <div className={classes["appointment-box"]}>
              <h2 className="d-flex align-items-center">Make an Appointment</h2>
              <form className="d-flex flex-wrap justify-content-between">
                <select>
                  <option value="value1">Select Department</option>
                  <option value="value2">Dentist</option>
                  <option value="value3">Cardiologist</option>
                </select>
                <select>
                  <option>Select Doctor</option>
                  <option>Dr. Michael Barley</option>
                  <option>Dr. Ian Smith</option>
                  <option>Dr. Ian Smith</option>
                  <option>Dr. Lloyd Wilson</option>
                </select>
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Phone No" />
                <button
                  className={`button ${classes["gradient-bg"]}`}
                  type="submit"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
