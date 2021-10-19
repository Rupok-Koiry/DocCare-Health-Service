import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Services.module.css";
const Services = () => {
  const [services, setServices] = useState([]);
  //Load services
  useEffect(() => {
    (async () => {
      const response = await fetch("./api.json");
      const responseResult = await response.json();
      setServices(responseResult);
    })().catch((err) => console.error(err.message));
  }, []);
  const history = useHistory();
  return (
    <section className={classes.services}>
      <h2 className="section-title">Our Services</h2>
      <div className="container">
        <div className="row">
          {services.map((service) => {
            return (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <div className={classes.single_department}>
                  <div className={classes.department_thumb}>
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className={classes.department_content}>
                    <h3>
                      <Link to={`/service/${service.id}`}>{service.title}</Link>
                    </h3>
                    {/* Slice the description into 120 character */}
                    <p>{service.description?.slice(0, 120)}...</p>
                    <button
                      className={`${classes.appointmentBtn} btn`}
                      onClick={() => history.push(`/service/${service.id}`)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
