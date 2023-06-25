import React from "react";
import "./SocialButtons.scss";

const SocialButtons = () => {
  return (
    <>
      <div className="social-button">
        <a
          href="https://www.linkedin.com/in/dilanetchinda-takoubo-86224b161/"
          target="_blank"
          className="share linkedin">
          <i className="bi bi-linkedin "></i>
        </a>

        <a
          href="https://github.com/dilanettd"
          target="_blank"
          className="share github">
          <i className="bi bi-github"></i>
        </a>

        <a href="" target="_blank" className="share facebook">
          <i className="bi bi-facebook"></i>
        </a>

        <a href="" target="_blank" className="share  youtube">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </>
  );
};

export default SocialButtons;
