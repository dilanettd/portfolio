import React from "react";

import "./portfolio.scss";
import Ecommerce from "../../img/ecommerce.png";
import Title from "../title/Title";
import ProjetItem from "./projetItem/ProjetItem";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio">
        {/* heading */}
        <Title subtitle={"My Projects"} title={"Portfolio"} />
        {/* slider */}
        <div className="content my-5">
          <ProjetItem
            image={Ecommerce}
            tittle={"Ecommerce"}
            description={
              "Lorem ip asperiores sapiente,quidem! Officiis, Error tempore iusto mollitia laborum quis nesciunt cupiditate repellat vitae ipsum perspiciatis, nisi alias distinctio architecto sint ex corporis? Maxime error pariatur tenetur harum?"
            }
            technologies={"ReactJS, Laravel, Bootstrap"}
            demoLink={"https://katika.io/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
