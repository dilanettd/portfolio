import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MdMenu } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";

import { themeContext } from "../../Context";
import Toggle from "../toggle/Toggle";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import "./Navbar.scss";
import Light from "../../img/logo/light.png";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClikLink = () => {
    if (isMobile) {
      setExpanded(!expanded);
      setShowMenu(!showMenu);
    }
  };

  const handleClickMenu = () => {
    setExpanded(!expanded);
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const containerStyle = isMobile
    ? { display: "flex", alignItems: "center", marginTop: "10px" }
    : {
        position: "absolute",
        justifyContent: "end",
        right: 0,
        marginRight: "10%",
        marginLeft: "10px",
      };

  const navbarStyle = {
    backgroundColor:
      (isMobile && expanded) || !isTop
        ? darkMode
          ? "#111111"
          : "#ffffff"
        : "transparent",
    transition: "background-color 0.2s ease",
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="px-1 fixed-top"
      style={navbarStyle}
      id="Navbar">
      <Container>
        <Navbar.Brand href="#home">
          {darkMode ? (
            <img className="logo-image" src={Light} alt="logo dark" />
          ) : (
            <img className="logo-image" src={Light} alt="logo light" />
          )}
        </Navbar.Brand>
        <Nav className="d-md-none"></Nav>
        <div
          className="d-md-none"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
          }}>
          <div className="me-3">
            <Toggle />
          </div>
          <div onClick={handleClickMenu} className="button-toggle">
            {showMenu ? <MdOutlineClear /> : <MdMenu />}
          </div>
        </div>

        <Navbar.Collapse>
          <Nav className="mx-auto mt-2" style={containerStyle}>
            <Nav.Link
              className="nav-link"
              style={darkMode ? { color: "white" } : null}>
              <Link
                onClick={handleClikLink}
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={darkMode ? { color: "white" } : null}>
              <Link
                onClick={handleClikLink}
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Services
              </Link>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={darkMode ? { color: "white" } : null}>
              <Link
                onClick={handleClikLink}
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Experience
              </Link>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={darkMode ? { color: "white" } : null}>
              <Link
                onClick={handleClikLink}
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Portfolio
              </Link>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={darkMode ? { color: "white" } : null}>
              <Link
                onClick={handleClikLink}
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Testimonial
              </Link>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={darkMode ? { color: "white" } : null}>
              <Link
                onClick={handleClikLink}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-md-5 d-none d-md-block">
              <div>
                <Toggle />
              </div>
            </Nav.Link>
            <Nav.Link className="ms-md-4 ">
              <div className="">
                <LanguageSwitcher handleClikLink={handleClikLink} />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
