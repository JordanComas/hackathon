import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <h2>
        Our phone number is: <a href="tel:305-766-6884">(123)-456-7890 </a>
      </h2>
      <h2>
        Our email is: <a href="email">ironhack@gmail.com </a>
      </h2>
    </div>
  );
};

export default Contact;
