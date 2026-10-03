import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u63fgwa",
        "template_42sahve",
        form.current,
        {
          publicKey: "iN2fkp1AXkoaF9N4C",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");

          // Clear the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="footer">

      <h1>
        Let’s make meaningful learning experiences together.
      </h1>

      <div className="footerContent">

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="footerLeftSection"
        >

          {/* Name */}
          <div>
            <p>Name</p>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>


          {/* Email */}
          <div>
            <p>Email</p>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>


          {/* Message */}
          <div>
            <p>Enter Message</p>

            <textarea
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>


          {/* Submit */}
          <button type="submit">
            Send Message →
          </button>

        </form>


        {/* Postcard */}
        <img
          src="/images/PostCard.png"
          alt="PostCard"
        />

      </div>


      {/* Divider */}
      <div className="footerLine"></div>


      {/* Footer Bottom */}
      <div className="footerBottom">

        {/* Social Links */}
        <div className="footerlogo">

          <a
            href="https://www.linkedin.com/in/ikshita-jain-a04183181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ikshitawork22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/email.png"
              alt="Email"
            />
          </a>

        </div>


        {/* Location */}
        <div className="footerLocation">

          <img
            src="/images/Location.png"
            alt="Location"
          />

          <span>
            PUNE | MAHARASHTRA
          </span>

        </div>


        {/* Copyright */}
        <p className="footerRights">
          © 2026 Ikshita
        </p>

      </div>

    </div>
  );
};

export default Footer;