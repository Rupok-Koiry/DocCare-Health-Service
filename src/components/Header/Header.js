import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Header.module.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { AuthContext } from "../../store/auth-context";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const history = useHistory();
  return (
    <header className="sticky-top">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className={classes.logoContainer}>
            <img
              src={logo}
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span>DocCare</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-auto ${classes.navLinkContainer}`}>
              <Nav.Link
                exact
                as={NavLink}
                to="/"
                activeClassName={classes.active}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/doctors"
                activeClassName={classes.active}
              >
                Doctors
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                activeClassName={classes.active}
              >
                Contact
              </Nav.Link>
              {/* if user login then show logout otherwise show login */}
              {user.email ? (
                <button className={`btn ${classes.loginBtn}`} onClick={logout}>
                  {user.displayName} Logout
                </button>
              ) : (
                <button
                  className={`btn ${classes.loginBtn}`}
                  onClick={() => history.push("/login")}
                >
                  Login
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
