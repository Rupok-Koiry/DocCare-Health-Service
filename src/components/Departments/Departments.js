import React from "react";
import classes from "./Department.module.css";
//Departments images import
import cardiology from "../../images/cardiology.png";
import eye from "../../images/eye.png";
import neurology from "../../images/neurology.png";
import plastic from "../../images/plastic-surgery.png";
import urology from "../../images/urology.png";
import dental from "../../images/dental.png";
const Departments = () => {
  return (
    <section className={classes.departmentsContainer}>
      <div className="container">
        <h2 className="section-title">Popular Departments</h2>
        <div className="row ">
          <div className="col-xl-2  col-md-4 col-sm-6">
            <div className={classes.department}>
              <div className={classes.department_img}>
                <img src={cardiology} alt="cardiology" className="img-fluid" />
              </div>
              <h3>Cardiology</h3>
            </div>
          </div>
          <div className="col-xl-2  col-md-4 col-sm-6">
            <div className={classes.department}>
              <div className={classes.department_img}>
                <img src={eye} alt="eye" className="img-fluid" />
              </div>
              <h3>Eye Care</h3>
            </div>
          </div>
          <div className="col-xl-2  col-md-4 col-sm-6">
            <div className={classes.department}>
              <div className={classes.department_img}>
                <img src={neurology} alt="neurology" className="img-fluid" />
              </div>
              <h3>Neurology</h3>
            </div>
          </div>
          <div className="col-xl-2  col-md-4 col-sm-6">
            <div className={classes.department}>
              <div className={classes.department_img}>
                <img src={plastic} alt="plastic" className="img-fluid" />
              </div>
              <h3>Plastic Surgery</h3>
            </div>
          </div>
          <div className="col-xl-2  col-md-4 col-sm-6">
            <div className={classes.department}>
              <div className={classes.department_img}>
                <img src={urology} alt="urology" className="img-fluid" />
              </div>
              <h3>Urology</h3>
            </div>
          </div>
          <div className="col-xl-2  col-md-4 col-sm-6">
            <div className={classes.department}>
              <div className={classes.department_img}>
                <img src={dental} alt="dental" className="img-fluid" />
              </div>
              <h3>Dental Care</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
