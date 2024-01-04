import React, { useState } from 'react';
import axios from 'axios';
import "./popup.css";

const Popupopen = () => {

  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector(".popupdiv").style.display = "none";

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    try {
      await axios.post('https://structuralguru-rcc-sample-server.vercel.app/send-email', { email, number, state });
      
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div className="popupdiv">
      <div className="contactPage">
        <h1 className="contactPageTitle">
          Please fill out the form.{" "}
        </h1>

        <form className="contactform"  onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            placeholder="Your Email"
            
            required
          />
          <input
            type="tel"
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
            id="phoneNumber"
            placeholder="Your WhatsApp Number"
            className="fullname"
            
            pattern="[0-9]{10}"
            required
          />
          <select type="text" value={state} onChange={(e) => setState(e.target.value)} className="email" required>
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
            <option value="Other/Abroad">Other/Abroad</option>
          </select>{" "}
          <br />
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popupopen;
