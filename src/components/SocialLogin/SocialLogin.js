import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import classes from "./SocialLogin.module.css";
const SocialLogin = ({ redirectPath }) => {
  const { signInUsingGoogle, signInUsingFacebook } = useContext(AuthContext);

  return (
    <>
      <div className={classes.separator}>
        <b>Or</b>
      </div>
      <button
        className={classes["social-button"]}
        id={classes["google-connect"]}
        onClick={() => signInUsingGoogle(redirectPath)}
      >
        <span>Login with Google</span>
      </button>
      <button
        className={classes["social-button"]}
        id={classes["facebook-connect"]}
        onClick={() => signInUsingFacebook(redirectPath)}
      >
        <span>Login with Facebook</span>
      </button>
    </>
  );
};

export default SocialLogin;
