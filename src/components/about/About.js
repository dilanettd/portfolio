import React from "react";
import programmer from "../../img/programmer.png";

import "./About.scss";
import Title from "../title/Title";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <Title title={"About Me"} subtitle={"Who I Am ?"} />
        <div className="row mt-5">
          <div className="col-12 col-sm-5 d-flex justify-content-sm-end">
            <img
              className="image-left"
              src={programmer}
              alt="Profile Image 626x626"
            />
          </div>

          <div className="col-12 col-sm-7 ps-sm-5 pt-4 pt-sm-0  d-flex flex-column align-items-center">
            <div className="text">
              I'm Dilane Takoubo Tchinda, A Full Stack developer based in
              Douala, Cameroon
            </div>
            <div
              className="blur-about"
              style={{ background: "#b69cc773" }}></div>
            <p>
              I have over three years' experience, and my skills and expertise
              have been honed over the years, and I'm now looking forward to the
              next exciting opportunity in my career journey.
            </p>
            <br />
            <div className="text">Why Work With Me</div>
            <p>
              I'm a great communicator & love to invest the necessary time to
              understand the customer's problem very well.
            </p>

            <div className=" mt-2 d-flex justify-content-center justify-content-sm-start">
              <button
                className="button intro-left__button"
                href="#link"
                target="blank">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
