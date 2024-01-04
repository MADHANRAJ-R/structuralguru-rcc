import React from "react";
import "./section_4.css";

const section4 = () => {
  return (
    <section className="sec-4 show-animate">
      <div className="training-info-div">
        <h1 className="training-heading">TO WHOM THIS TRAINING IS FOR?</h1>
        <div className="sec-4-center-line"></div>
        <ul className="training-targets animate">
          <li style={{ "--i": 0 }}>Civil/Structural Aspirants</li>
          <li style={{ "--i": 1 }}>Entrepreneurs</li>
          <li style={{ "--i": 2 }}>Site Engineers</li>
          <li style={{ "--i": 3 }}>Construction Engineers</li>
          <li style={{ "--i": 4 }}>Project Engineers</li>
          <li style={{ "--i": 5 }}>Planning Engineers</li>
          <li style={{ "--i": 6 }}>Quantity Surveyors</li>
          <li style={{ "--i": 0 }}>QA/QC Engineers</li>
          <li style={{ "--i": 1 }}>Project Managers</li>
          <li style={{ "--i": 2 }}>Draftsmen</li>
          <li style={{ "--i": 3 }}>Design Engineers</li>
          <li style={{ "--i": 4 }}>Engineering Students</li>
          <li style={{ "--i": 5 }}>Architects</li>
          <li style={{ "--i": 6 }}>Builders/Promoters</li>
        </ul>
      </div>
    </section>
  );
};

export default section4;
