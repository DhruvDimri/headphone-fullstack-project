import React, { useState} from "react";
import "./contact.css";
import { useLocation } from "react-router-dom";

const Contact = () => {

  const location = useLocation();
  const [message, setMessage] = useState({
    fullname: "",
    email: "",
    mssg: ""
  });

  function handleChange(name, value){
    setMessage((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://headphone-fullstack-project-1.onrender.com/users/submit-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
      body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error("network response was not ok");
      }

      const result = await response.json();
      alert(result.message || "Message sent  successfully");

      setMessage({
        fullname: "",
        email: "",
        mssg: ""
      });

    } catch (error) {
      // console.error("Error sending message:", error);
      alert("Failed to send message. \n \nName OR Email is incorrect");
    }
  }; 


  return (
    <section className={location.pathname === "/contact" ? "contact-page-container" : "contact-form-container" }>
      <h2 className="contact-ka-h1">Contact Us</h2>
      <div className="contact-form-flex">
          <form className="contact-left" onSubmit={handleSubmit}>
            <div className="contact-left-group">
            <input type="text" placeholder="Full Name*" name='fullname' value={message.fullname} required onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <input type="email" placeholder="Email Address*" name='email' value={message.email} required onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            </div>
            <textarea name="mssg" rows={3} placeholder="Your message" value={message.mssg} onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <button type="submit">SEND MESSAGE NOW</button>
          </form>

          <div className=" contact-right">
            <p className="contact-more">More About <span className="contact-orng"> Brand</span></p>
            <p className="contact-scnd-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In magni fugit repellat harum, itaque maiores deleniti repellendus aliquam molestiae provident, beatae, tempora ducimus. Magnam exercitationem, rem rerum atque harum placeat.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam esse dolor quis eum autem non libero nobis corrupti, atque impedit.</p>
          </div>
      </div>
    </section>
  );
};

export default Contact;
