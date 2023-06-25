import React, { useContext, useState, useEffect } from "react";
import "./Intro.scss";
import boy from "../../img/photo_profile.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../floatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

//importing typewriter-effect
import Typewriter from "typewriter-effect";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  //Check if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="container">
      <div className="intro">
        {/* left name side */}
        <div className="intro-left">
          <div className="intro-left__name pt-0 pt-sm-5 mt-sm-3">
            <span style={{ color: darkMode ? "white" : "" }}>
              Hello, This is
            </span>
            <span style={{ color: darkMode ? "white" : "" }}>
              Dilane Tchinda, And I'm a
            </span>
            <span>
              <Typewriter
                options={{
                  strings: ["Full-Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button intro-left__button">Hire me</button>
            </Link>
          </div>
        </div>

        {/* right image side */}
        <div className="intro-right ms-4 p-2 ">
          <img className="intro-right__image" src={boy} alt="Me" />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />
          <motion.div
            initial={{ top: "-15%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div">
            {!isMobile && <FloatinDiv img={crown} />}
          </motion.div>

          {/* animation */}
          <motion.div
            initial={{ left: "20rem", top: "18rem" }}
            whileInView={{ left: "5rem", top: "20rem" }}
            transition={transition}
            className="floating-div">
            {isMobile && <FloatinDiv img={crown} />}
          </motion.div>

          <div className="blur-intro"></div>
          <div
            className="blur-intro"
            style={{
              background: "#b9d8dfab",
              top: isMobile ? "114rem" : "64rem",
              width: "28rem",
              height: "11rem",
              left: "-25rem",
            }}></div>
          <div
            className="blur-intro"
            style={{
              background: "#dcf1f5",
              top: "17rem",
              width: "28rem",
              height: "20rem",
              left: "-45rem",
              top: "-8rem",
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
