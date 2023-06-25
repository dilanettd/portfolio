import React from "react";
import "./Card.scss";

const Card = ({ emoji, heading, tooling, detail, color }) => {
  return (
    <div className="card-box" style={{ borderColor: { color } }}>
      <img style={{ height: "100px" }} src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail} </span>
      <span>{tooling} </span>
    </div>
  );
};

export default Card;
