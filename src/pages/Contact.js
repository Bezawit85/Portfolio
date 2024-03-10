import React, { useRef } from "react";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./contact.css";
import { MdPlace } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p543top", "template_25b8lfa", form.current, {
        publicKey: "soK8hl8qJiF4CsAbn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contactme">
        <ContactSectionStyle>
          <div className="contact">
            <h3>Get in touch</h3>
            <h1>CONTACT</h1>
            <Navbar />
          </div>
          <div className="contactForms">
            <div className="left">
              <div className="Icons">
                <MdPlace className="icon" /> <p className="locate">AddisAbaba, Ethiopia</p>{" "}
              </div>
              <div className="Icons">
                <MdEmail className="icon" /> <p className="locate">bezaeshetu46@gmail.com</p>{" "}
              </div>
              <div className="Icons">
                <MdPhone className="icon" /> <p className="locate">+251-953-437-286 </p>{" "}
              </div>
            </div>
            <div className="right">
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <button className="sendMsg" type="submit" value="Send">Send Message</button>
              </form>
            </div>
          </div>
        </ContactSectionStyle>
      </div>
    </>
  );
};

export default Contact;
