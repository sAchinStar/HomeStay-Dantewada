import React, { useState, useRef } from "react";
import "./ContactPage.css";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Thank you for reaching out! We'll get back to you soon.");
  //   // Add logic to send the form data via email or API.
  // };

  //send mail
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mixuanm', 'template_hynaexl', form.current,'vIlk7nXuyruvDF_Xx')
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thank you for reaching out! We'll get back to you soon.");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <header className="contact_header">Contact Us</header>

      <div className="contact_container">

        <div className="contact_left">
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80" alt="image" />
        </div>


        <div className="contact_right">

          <h2 id="contact_h2">Send Us a Message</h2>

          <form ref={form} className="contact_form" onSubmit={sendEmail}>

            <label htmlFor="name" id="contact_label">Enter Name: </label>
            <input
              className="contact_name"
              name="name"
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" id="contact_label">Enter e-mail: </label>
            <input
              className="contact_mail"
              name="email"
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message" id="contact_label">Message: </label>
            <textarea
              className="message"
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" className="btn btn-outline-success" value={"Send"}/>
          </form>


        </div>

      </div>

      <div className="contact_last">
        <p>If you have any questions, feel free to reach out to us:<br />
          Email: support@dantewada-tourism.com<br />
          Phone: +91 6265490184</p>
      </div>
    </>
  );
};

export default ContactPage;