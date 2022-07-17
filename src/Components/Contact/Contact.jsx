import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { themeContext } from '../../Context';
import {useContext } from "react";

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_th890q1', 'template_lehwphj', form.current, 'cq_JNZ8SdZ4oQAR4A')
      .then(() => {
          setDone(true);
      });
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className="contact-form">
          <div className="w-left">
              <div className="span">
                  <span style={{color: darkMode ? 'white': ''}} >Get in touch</span>
                  <span>contact me</span>
                    <div className="blur s-blur1" 
                    style={{background: "#ABF1FF94"}}></div>                
              </div>
          </div>
          <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name="user_name" className="user" placeholder="Name"/>
                  <input type="email" name="user_email" className="user" placeholder="Email"/>
                  <textarea className="user" placeholder="Message" name="message"/>
                  <input type="submit" value="Send" className="button"/>
                  <span>{done && "Thanks for contacting me"}</span>
                  <div 
                    className="blur c-blur1"
                    style={{background: "var(--purple"}}
                  ></div>
              </form>
          </div>
      </div>
  );
};

export default Contact;
