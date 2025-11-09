import React from "react";
import "./Home.css";
import Myimage from "../../../assets/Myimage.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <div className="intro-text">
          <p className="section-title">Hi, I'm Abdul Ahad</p>
          <h1 className="hero-section-title">
            Building <span className="highlight">Robust</span> &{" "}
            <span className="highlight">Scalable</span>
            <br />
            Web Applications
          </h1>
          <p className="hero-section-description">
            A passionate Full Stack Developer skilled in React, Node.js,
            Express, and MongoDB. Turning ideas into reality with clean,
            efficient code.
          </p>
          <div className="skills">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
          </div>
          <div className="get-in-touch">
            <a
              href="https://wa.me/917037382479?text=Hi%20Abdul%20Ahad%2C%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              Get In Touch
              <FaWhatsapp className="whatsapp-icon" />
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/CodingWithAhad" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/abdulahad-devloper" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/oye-abdul" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="image-container">
          <img src={Myimage} alt="Abdul Ahad" className="hero-section-image" />
        </div>
      </div>
      {/* Chatbot se related button aur popup yahan se hata diya gaya hai */}
    </section>
  );
}
