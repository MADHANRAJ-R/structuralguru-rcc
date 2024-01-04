import React from "react";
import img1 from "../assets/sg-logo-1.jpg";
import img2 from "../assets/sg-logo-2.jpg";
import img3 from "../assets/sg-logo-3.jpg";
import img4 from "../assets/sg-logo-4.jpg";
import tick from "../assets/tick-symbol.png";
import "./companyLogo.css";

const Logos = () => {



  return (
    <section className="com-logo-sec show-animate">
      <div className="course-main-div">
        
        <div className="courese-inner-div">
          <div className="left-div animate">
            <h1 className="left-title">Why You Should Join?</h1>
            <ul>
              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                To become expert in manual RCC design calculations.
              </li>
              
              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                To become expert in RCC manual detailing and
                automated software based detailing.
              </li>
              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                To practice RCC design under live project and through
                expert guidance.
              </li>

              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                To easily switch job from any other field to design field
                without any hurdles.
              </li>
            </ul>
          </div>

          <div className="center-line"></div>

          <div className="right-div animate">
            <h1 className="right-title">What Happens When You Join?</h1>
            <ul>
              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                Gain high knowledge confidence in structural design field in
                live practical way of learning.
              </li>
              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                Start your own design consultancy with our excellant step by
                step guidance.
              </li>
              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                Easily pass in any structural design role interviews and switch
                & settle in design field.
              </li>
              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                Get our free pan India services franchise in both training and
                consultancy business.
              </li>

              <li>
                <span>
                  <img
                    className="tick-sym"
                    src={tick}
                    alt="tick symbol"
                    width={20}
                    height={20}
                  />
                </span>
                If selected, join in our company in various positions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logos">
        <div className="logos-slide">
          <img src={img1} alt="3M Logo" />
          <img src={img2} alt="Barstool Store Logo" />
          <img src={img3} alt="Budweiser Logo" />
          <img src={img4} alt="Budweiser Logo" />
        </div>
        <div className="logos-slide">
          <img src={img1} alt="3M Logo" />
          <img src={img2} alt="Barstool Store Logo" />
          <img src={img3} alt="Budweiser Logo" />
          <img src={img4} alt="Budweiser Logo" />
        </div>
        <div className="logos-slide">
          <img src={img1} alt="3M Logo" />
          <img src={img2} alt="Barstool Store Logo" />
          <img src={img3} alt="Budweiser Logo" />
          <img src={img4} alt="Budweiser Logo" />
        </div>
        <div className="logos-slide">
          <img src={img1} alt="3M Logo" />
          <img src={img2} alt="Barstool Store Logo" />
          <img src={img3} alt="Budweiser Logo" />
          <img src={img4} alt="Budweiser Logo" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
