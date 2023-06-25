import React from "react";
import { motion } from "framer-motion";

import "./Services.scss";
import Card from "../card/Card";
import html from "../../img/html.png";
import code from "../../img/code.png";
import Title from "../title/Title";

const Services = () => {
  return (
    <div className="container">
      <div className="services">
        <Title title={"Services"} subtitle={"What I Can Do"} />
        <div className="services-description my-3">
          In my role as a full-stack developer, I'm able to oversee all phases
          of web development projects, from design and development through to
          production.
          <div className="blur"></div>
        </div>
        {/* right */}
        <motion.div
          className="row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="col-xs-12 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card
                emoji={code}
                heading={"BACKEND APPS"}
                detail={
                  "Build scalable and maintainable server applications using cutting-edge technologies such as"
                }
                tooling={"SpringBoot, Laravel, Flask, Nodejs"}
              />
            </motion.div>
          </div>
          <div className="col-xs-12 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card
                emoji={html}
                heading={"FRONTEND APPS"}
                detail={
                  "Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as:"
                }
                tooling={"Angular, ReactJS, Bootstrap, MaterialUI"}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
