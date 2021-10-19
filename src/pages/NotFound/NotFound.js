import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./NotFound.module.css";
import notFound from "../../images/404-medical-removebg-preview.png";
const NotFound = () => {
  const history = useHistory();
  return (
    /* 404 Page */
    <section className={classes.notFound}>
      <div className="text-center">
        <img
          className={classes.notFoundImg}
          src={notFound}
          alt="Page not found"
        />
        <h2>OPPS! PAGE NOT FOUND</h2>

        <button
          className={`btn ${classes.notFoundBtn} my-3`}
          onClick={() => history.push("/")}
        >
          GO TO HOME PAGE
        </button>
      </div>
    </section>
  );
};
export default NotFound;
