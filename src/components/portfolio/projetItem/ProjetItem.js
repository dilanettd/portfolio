import React from "react";

import "./ProjetItem.scss";

const ProjetItem = ({
  image,
  tittle,
  description,
  technologies,
  codeLink,
  demoLink,
}) => {
  return (
    <>
      <div className="container projet-item ">
        <div className="row">
          <div className="col-12 col-sm-6">
            <img className="projet-item__image" src={image} alt="image" />
          </div>
          <div className="col-12 col-sm-6">
            <h2 className="projet-item__title my-4">{tittle}</h2>
            <p className="projet-item__description mb-4">{description}</p>
            <h5 className="projet-item__technologies d-flex justify-content-center mb-4 mt-2">
              {technologies}
            </h5>
            <div className="d-flex flex-direction-column justify-content-center">
              <div className="me-5">
                <a
                  style={{ fontSize: "20px" }}
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Code<i class="bi bi-github"></i>
                </a>
              </div>
              <div className="ms-5">
                <a
                  style={{ fontSize: "20px" }}
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Demo<i class="bi bi-box-arrow-in-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjetItem;
