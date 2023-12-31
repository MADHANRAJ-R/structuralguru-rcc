import React, { useState } from "react";
import "./accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Is this PRACTICAL RCC MANUAL DESIGN TRAINING IN XL SHEETS Course in online mode?",
      answer: "Yes, the course is available in ONLINE MODE ONLY. ",
    },

    {
      question: "What is the course fee of Video mode?",
      answer:
        "Fee will be Just Rs.199/- one time only . This special discount will expire soon, so grab it quickly.",
    },

    {
      question: "What is the duration of Video mode?",
      answer:
        "Total 35 hrs of video training. Easily can be completed in 2 months duration, even though video access will be granted for 1 year period. You can watch in your comfortable time. ",
    },

    {
      question: "Do you have live mode also?",
      answer:
        "No. We have live mode only for detailed PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING.",
    },

    {
      question: "How the videos will be sent?",
      answer:
        "Once payment is done, we will send 35 hrs video & files to your gmail id. You can watch videos through your google drive.",
    },

    {
      question: "Do all videos and files will have life time access?",
      answer:
        "Videos will be granted for 2 months access. Rest all xl files,pdf books, etc all can be downloadable to life time access. Videos can't be downloadable, only viewable to 2 months period.",
    },

    {
      question: "Can we get certificate after completion?",
      answer:
        "Yes after submitting all exercises given in the training at the end of the course all one time, and found done without mistakes, we will issue e-certificate of course completion to your mail.",
    },

    {
      question: "Where is 80% discount payment link?",
      answer: (
        <span>
          Link here:{" "}
          <a
            href="https://rzp.io/l/01xuMSspo"
            target="_blank"
            rel="noopener noreferrer"
            className="acc-payment-link"
          >
            https://rzp.io/l/01xuMSspo
          </a>
        </span>
      ),
    },

    {
      question: "How to get clarifications & doubts cleared?",
      answer:
        "Doubts & clarifications can be messaged to WA +91-9629121300. We will clear them through WA messages or WA calls or skype calls or Zoom calls for few mins. We clear them bi-weekly once after accumulated.",
    },

    {
      question: "What is the language taught?",
      answer: "The course is taught in simple ENGLISH language.",
    },

    {
      question: "Is there placement assistance after course completion?",
      answer:
        "We refer CV of completed persons in our VIP business owner's circle where continuous requirements will be emerging from them. At the end of the training, the skill level will be super high that easily any design role interview will be passed. More over one can start their own consultancy too or start part time consultancy works as well as alternate profession.",
    },

    {
      question:
        "I have no experience in design filed, still can i join and learn?",
      answer:
        "Yes. This training has been designed to teach from scratch basics level to advanced level.",
    },

    {
      question: "What is minimum qualification required for this training?",
      answer:
        "This course requires minimum Diploma in Civil Engineering level knowledge to understand.",
    },

    {
      question: "Can i switch from video mode to Live mode training any time?",
      answer:
        "Yes, by adjusting the fees any time one can join Live mode. Live mode fees should be paid for continuing in Live batch training.",
    },
  ];

  return (
    <section className="accordion-div show-animate">
      <div className="accordion-inner-div animate">
        <h1 className="accordion-heading">Frequently Asked Questions</h1>
        <p>
          Please reach us at{" "}
          <a href="mailto:admin@gururayarassociates.com">
            admin@gururayarassociates.com
          </a>{" "}
          or WA NO. 9629121300 or 94896 45708 if you cannot find an answer to
          your question.
        </p>

        {faqData.map((faq, index) => (
          <div key={index} className="accordion-item ">
            <div
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <div className="arrow-div">
                <span
                  className={`arrow ${activeIndex === index ? "inverted" : ""}`}
                >
                  &#9660;
                </span>
              </div>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
