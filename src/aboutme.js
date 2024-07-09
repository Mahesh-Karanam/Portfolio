import React from 'react';
import './aboutme.css';

const AboutMe = () => (
  <div className="aboutme-container">
    <h2>About Me</h2>

    <div className="aboutme-section">
      <h3>Profile Overview</h3>
      <p className="about">
        I am currently an undergraduate student in my fourth year pursuing B.Tech at RVRJC College. My academic focus and professional skills span across several domains, including programming languages such as Python, Java, SQL, C++, and C. I am known for my continuous learning drive and diligent work ethic.
      </p>
    </div>

    <div className="aboutme-section">
      <h3>Professional Experience</h3>
      <p className="about">
        Web Application Pentester Internship at Indian Servers:
        During my tenure at Indian Servers, I honed my skills as a web application pentester. My primary project involved working extensively on OWASP Juice Shop projects, where I gained practical insights into cybersecurity challenges and solutions.
      </p>
    </div>

    <div className="aboutme-section">
      <h3>Cybersecurity Internship</h3>
      <p className="about">
        At 1Stop.ai, I furthered my experience in cybersecurity by testing sample websites. This internship provided me with hands-on experience in identifying vulnerabilities and ensuring the security of digital platforms.
      </p>
    </div>

    <div className="aboutme-section">
      <h3>Skills and Interests</h3>
      <p className="about">
        Beyond my academic and professional pursuits, I am passionate about programming and enjoy expanding my knowledge through reading books. I thrive on challenges and am eagerly preparing to launch my career in the tech industry.
      </p>
    </div>

    <div className="aboutme-section">
      <h3>Achievements</h3>
      <p className="about">
        - Solved more than 400 problems on LeetCode.
        - Holding 9.58 CGPA.
        - Won several college-hosted hackathons.
      </p>
    </div>
  </div>
);

export default AboutMe;
