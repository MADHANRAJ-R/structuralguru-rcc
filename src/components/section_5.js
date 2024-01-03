import React from "react";
import "./section_5.css";
import tick from "../assets/tick-symbol.png";

const Section5 = () => {
  
  return (
    <section id="paymentId" className="sec-5 show-animate">
      <div className="payment-info-div">
        <h1 className="payment-title">Purchase the course</h1>

        <div className="payment-container">
          <div className="payment-method-1 animate">
            <div className="pro-plan-column">
              <div className="pro-plan-mode">
                <h1 className="plans-h1 basic-h1"> Pre-Recorded Video Mode </h1>
              </div>

              <p className="plans-p3">
                for 2-months access to videos and lifetime access to files.
              </p>
              <p className="plans-p2">
                Get started with our Basic plan and kickstart your learning
                journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  Duration - 2 months.
                </li>

                <li>
                  <img src={tick} alt="" />
                  35 hrs pre-recorded videos.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Doubts & clarification in online/phone.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Pdf Code books, Notes and xl sheets supply.
                </li>

                <li>
                  <img src={tick} alt="" />
                  Certification.
                </li>
              </ul>

              <a
                href="https://rzp.io/l/01xuMSspo"
                target="_blank"
                rel="noreferrer"
                className="plans-link"
              >
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
          </div>

          <div className="payment-center-line-forcolumn">
            <p className="or">or</p>
          </div>
          <div className="payment-method-2 animate">
            <p className="payment-info2">
              You can also pay <b>Rs.199/-</b> directly to UPI
              Gpay/PhonePe/Paytm no. 9629121300.{" "}
              <b className="font-bold-payment">IMPORTANT:</b> After payment send
              receipt & gmail id to WhatsApp no.{" "}
              <b className="font-bold-payment">+91-9629121300</b>. We will
              dispatch the course contents to your gmail id and google drive.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Section5;
