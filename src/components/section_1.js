import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./section_1.css";

import companyLogo from "../assets/sg-profile-logo.jpg";

const Section1 = () => {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset - height / 2 && top < offset + height) {
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  };

  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify({ minutes, seconds }));
  }, [minutes, seconds]);

  useEffect(() => {
    const savedTimer = JSON.parse(localStorage.getItem("timer"));
    if (savedTimer) {
      setMinutes(savedTimer.minutes);
      setSeconds(savedTimer.seconds);
    }
  }, []);

  return (
    <section id="section1" className="sec-1 show-animate">
      <div className="sec-1-div ">
        <div className="logo-img">
          <img className="animate" src={companyLogo} alt="company-logo" />
          <h1 className="company-name">StructuralGuru</h1>
        </div>

        <div className="quotes">
          <p className="quotes-2">
            WELCOME TO PRACTICAL RCC MANUAL DESIGN TRAINING !
          </p>
          <div className="quotes-center-line"></div>
          <p className="motto-quote">
            Help Each Other, Grow Together !
            <span className="showRigth-animate"></span>
          </p>
        </div>

        <div className="offer-timer-div">
          <div className="offer-end-main">
            <h3>Register in next</h3>

            <div className="offer-end-div">
              <div className="time-box">
                <span className="minutes">{String(minutes).padStart(2, "0")}</span>
                <span className="min">Minutes</span>
              </div>

              <div className="time-box">
                <span className="seconds">{String(seconds).padStart(2, "0")}</span>
                <span className="sec">Seconds</span>
              </div>
            </div>
          </div>

          <Link
            activeClass="active"
            to="paymentId"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className="offer-button"
          >
            <button>Pricing Plans</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
