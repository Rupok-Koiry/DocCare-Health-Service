import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaUserNurse } from "react-icons/fa";
import Appointment from "../../components/Appointment/Appointment";
import classes from "./ServiceDetail.module.css";

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  //Load all services
  useEffect(() => {
    (async () => {
      const response = await fetch("/api.json");
      const responseData = await response.json();
      //Find the user selected service
      const selectedService = responseData.find(
        (service) => service.id === +id
      );
      setService(selectedService);
    })().catch((err) => console.error(err.message));
  }, [id]);
  return (
    <>
      <section className="container my-5">
        <article
          className={`${classes.service} ${classes.bar} ${classes.green}`}
        >
          <a className={classes.service__img_link} href="/">
            <img
              className={classes.service__img}
              src={service.image}
              alt={service.title}
            />
          </a>
          <div className={classes.service__text}>
            <h1 className={`${classes.service__title} ${classes.blue}`}>
              <a href="/">{service.title}</a>
            </h1>
            <div className={`${classes.service__subtitle}`}>
              <FaUserNurse /> <span>{service.doctor}</span>
            </div>
            <div className={classes.service__bar}></div>
            <div className={classes["service__preview-txt"]}>
              {service.description}
            </div>
          </div>
        </article>
      </section>
      <Appointment />
    </>
  );
};

export default ServiceDetail;
