import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactFormStyles.css";

export const ContactForm = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6fmoysf', 'template_ndw67vk', form.current, 'GC5VjvWQcWdYjLBPO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      document.getElementById("nameF").value = " ";
      document.getElementById("emailF").value = " ";
      document.getElementById("messageF").value = " \n\tMessage successfully sent to Melissa! You can expect a \n\tresponse within the next 24-72 hours! Please note if you are in crisis,\n\tdo not wait for a reply, please contact 9-1-1 immedately.\n\n\t\t -Melissa Simonek LCPC";
  };
  return (
    <div className='masker'>
      <div className="form-container">
        <h4> Complete the contact form to begin your therapeutic journey! </h4>
        <p className='dis'> *PLEASE NOTE: This contact form is for scheduling purposes and
            initial consultation messages. If you are in a crisis, 
            please call 9-1-1 immedately instead*</p>
        <div className="titleLine"></div>
        <div className="elements">
          <form ref={form} onSubmit={sendEmail}>
              <div className="horz">
                <label>Name:</label>
                <input type="text" name="user_name" id="nameF" />
                <label>Email:</label>
                <input type="email" name="user_email" id="emailF" />
              </div>
              <div className="center-too">
                <div className="ms"> 
                  <label>Message:</label>
                </div>
                <textarea name="message" id="messageF"/>
              </div>
              <div className="sub">
                <input type="submit" value="Send"/>
              </div>
          </form>
        </div>
      </div>
      </div>
  );
};
export default ContactForm;