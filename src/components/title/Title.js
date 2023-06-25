import React from "react";

import "./Title.scss";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className="title">
        <h1 className="title-text">{title}</h1>
      </div>
      <div className="subtitle">
        <div className="subtitile-bar left"></div>
        <h2 className="subtitle-text">{subtitle}</h2>
        <div className="subtitile-bar right"></div>
      </div>
    </>
  );
};

export default Title;
