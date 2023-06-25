import React from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Dilano.Dev, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
