import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import GitHub from "./component/image/Githubjpg.jpeg"
import Email from "./component/image/Email.png"
import Leetcode from "./component/image/Leetcode.jpeg"
import LinkedIn from "./component/image/LinkedIn.jpeg"
import Phone from "./component/image/Phone.png";
import "./component/css/Email.css"
const EmailForm = () => {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w4rkbgr', 'template_l6jair6', e.target, 'bErA7uP0tpxgeO21F')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Email could not be sent:', error.text);
      });

    setToEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="email-form-container">
      <h1 className="form-title">Send an Email</h1>
      <form className="email-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="to_email">To:</label>
          <input
            type="email"
            name="to_email"
            id="to_email"
            className="form-control"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Send Email</button>
      </form>
      <div className="Contact-Detail  " >
                
                <div className="Email" style={{marginBottom:"30px",marginLeft:"30px"}}>
                    
                    <a  style ={{marginLeft:"30px"}}href="https://mail.google.com"><img  style={{height:"25px" ,borderRadius:"50%"}} src={Email}></img></a>
                </div>
                <div className="GitHub"style={{marginBottom:"30px",marginLeft:"30px"}} >
                
                <a style ={{marginLeft:"30px"}} href="https://github.com/login"><img  style={{height:"25px"}} src={GitHub}></img></a>

                </div>
                <div className="LeetCode" style={{marginLeft:"30px"}} >
                <a style ={{marginLeft:"30px"}} href="https://leetcode.com/Kiruthick100/">                <img  style={{height:"25px"}} src={Leetcode}></img>
</a>

                </div>
                <div>
                    <div className="LinkedIn" style={{marginBottom:"30px",marginLeft:"30px"}}>
                    <img  style={{height:"25px"}} src={LinkedIn}></img>
                    {/* <a  style ={{marginLeft:"30px"}} href="https://github.com/login">Kiruthick</a> */}


                    </div>
                  
                </div>
                
            </div>
    </div>
  );
};

export default EmailForm;
