import React, { useContext } from "react";
import "./Works.scss";

import Katika from "../../img/logo/katika.svg";
import Paysika from "../../img/logo/paysika.webp";
import Upwork from "../../img/logo/Upwork.png";
import TonkaIn from "../../img/logo/tonkain.jpg";
import Mesintech from "../../img/logo/mesintech.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works container" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            I'm proud to have collaborated with some awesome companies
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Katika} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{ width: "130px" }} src={Paysika} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img style={{ width: "130px" }} src={TonkaIn} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{ width: "130px" }} src={Mesintech} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
