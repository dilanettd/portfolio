import React from "react";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = ({ handleClikLink }) => {
  return (
    <>
      <div className="lang-menu">
        <div className="selected-fr"></div>
        <ul>
          <li>
            <a href="" className="en" onClick={handleClikLink}></a>
          </li>
          <li>
            <a href="" className="fr" onClick={handleClikLink}></a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageSwitcher;
