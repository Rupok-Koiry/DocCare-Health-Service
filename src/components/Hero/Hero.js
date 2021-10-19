import React from "react";
import classes from "./Hero.module.css";
const Hero = () => {
  //Banner
  return (
    <section className={`${classes.hero}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <h6>WELCOME TO DOCCARE</h6>
            <h1>We are here for your Care</h1>
            <p>
              Your Health is always in the first place, which we care the most.
              We help you to find the best doctors around you.
            </p>
            <button className={classes.heroBtn}> Check Our Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
