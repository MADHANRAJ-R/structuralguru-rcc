import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./popup.css";

const Popupopen = () => {
  useEffect(() => {
    
    document.querySelector(".popupdiv").style.display = "flex";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    messageSent();
    sendEmail();
    e.target.reset();
    document.querySelector(".popupdiv").style.display = "none";
  };
  const messageSent = () => {
    window.alert("Subscribed Successfully ! ");
  };

  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_5mnamig",
        "template_sumy8vq",
        form.current,
        "lTkxREBj-LHdnWv1w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="popupdiv">
      <div className="contactPage">
        <h1 className="contactPageTitle">
          Please fill out the form before making a purchase.{" "}
        </h1>

        <form className="contactform" ref={form} onSubmit={handleSubmit}>
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Your WhatsApp Number"
            className="fullname"
            name="phoneNumber"
            pattern="[0-9]{10}"
            required
          />
          <select className="email" name="from_state" >
            <option value="" disabled selected>
              Select your state
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>{" "}
          <br />
          <button type="submit" value="Send" className="submitbtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popupopen;
