import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo">📰 NewsApp</h2>

        <ul className="footer-links">
          
        </ul>

      </div>

      <p className="footer-bottom-text">
        © {new Date().getFullYear()} NewsApp | Built using GNews API | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
