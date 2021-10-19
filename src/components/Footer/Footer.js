import React, { useContext } from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { AuthContext } from "../../store/auth-context";

const Footer = () => {
  const { user } = useContext(AuthContext);
  //Footer
  return (
    <footer className="footer">
      <div className="border-bottom pb-5 mb-4 footerSubscribe">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <form action="#" className="subscribe mb-4 mb-lg-0">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button>
                    <span className="icon-keyboard_backspace">
                      <MdArrowRightAlt />
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 text-lg-center">
              <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                <li>
                  <Link to="/doctors">Doctors</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {!user.email && (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled nav-links social nav-right text-lg-right">
                <li>
                  <a href="/">
                    <span className="icon-twitter">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="icon-instagram">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="icon-facebook">
                      {" "}
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="icon-pinterest">
                      <FaPinterestP />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mainFooter">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
            <a href="/" className="m-0 p-0">
              <img
                src={logo}
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <span>DocCare</span>
            </a>
          </div>
          <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
            <ul className="list-unstyled nav-links m-0 nav-left">
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 text-lg-right order-3 order-lg-3">
            <p className="m-0 text-muted">
              <small>&copy; 2022. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
