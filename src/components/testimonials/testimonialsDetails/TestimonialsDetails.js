import React from "react";

import "./TestimonialsDetails.scss";

const TestimonialsDetails = ({ clients }) => {
  const { name, description, img } = clients;
  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} />
        <p>{description}</p>
      </div>
      <div className="testimonial-name">
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default TestimonialsDetails;
