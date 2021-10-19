import React from "react";
import classes from "./About.module.css";
import about1 from "../../images/about1.webp";
import about2 from "../../images/about2.webp";
import { FaCheckCircle } from "react-icons/fa";
const About = () => {
  //About DocCare
  return (
    <section className={classes.about}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-xxl-6">
            <div className={classes.aboutImg}>
              <img src={about1} alt="about1" className="img-fluid" />
              <img
                src={about2}
                alt="about2"
                className={`${classes.aboutImg2} img-fluid`}
              />
            </div>
          </div>
          <div className="col-lg-5 col-xxl-6">
            <h5>Welcome to DocCare</h5>
            <h2>Best Care For Your Good Health</h2>
            <p>
              Being healthy should be part of your overall lifestyle. Living a
              healthy lifestyle can help prevent chronic diseases and long-term
              illnesses. Feeling good about yourself and taking care of your
              health are important for your self-esteem and self-image.
            </p>
            <ul>
              <li>
                <FaCheckCircle /> Eat a healthy, balanced diet with lots of
                vegetables and fruit.
              </li>
              <li>
                <FaCheckCircle /> Keep your immunizations up-to-date.
              </li>
              <li>
                <FaCheckCircle /> Don't use tobacco, vape products, alcohol, or
                drugs.
              </li>
              <li>
                <FaCheckCircle /> Exercise as often as you can.
              </li>
              <li>
                <FaCheckCircle /> Stay aware of your emotions and moods.
              </li>
            </ul>
            <button className={`btn ${classes.aboutBtn}`}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
