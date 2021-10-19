import React from "react";
import classes from "./HeroFeature.module.css";
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const HeroFeature = () => {
  //Top feature
  return (
    <section className={classes.feature}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className={classes.featureContent}>
              <FaHeartbeat />
              <h3>Hospitality </h3>
              <p>
                Hospitality is the relationship between a guest and a host,
                wherein the host receives the guest with some amount of
                goodwill.
              </p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-4 ${classes.unique}`}>
            <div className={`${classes.featureContent}`}>
              <MdPhoneInTalk />
              <h3>Emergency Care </h3>
              <p>
                A medical specialty concerned with the care and treatment of
                acutely ill or injured patients who need immediate medical
                attention.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className={classes.featureContent}>
              <BsFillCalendar2PlusFill />
              <h3>Chamber Service</h3>
              <p>
                The goal of any Chamber is to help to further the interests of
                small businesses in a local area. The activities can range from
                hosting events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFeature;
