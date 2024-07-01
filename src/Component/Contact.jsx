import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h6 className="contact-title">Get In Touch</h6>
        <h1 className="contact-heading">Contact Me</h1>
        <p className="contact-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="contact-form">
        <div className="contact-fieldset">
          <div className="contact-field-group md">
            <div className="contact-field-group-item">
              <label className="contact-label">First Name</label>
              <input type="text" className="contact-input" />
            </div>
            <div className="contact-field-group-item mt-4 md:mt-0">
              <label className="contact-label">Last Name</label>
              <input type="text" className="contact-input" />
            </div>
          </div>
          <div className="contact-field-group md">
            <div className="contact-field-group-item">
              <label className="contact-label">Email</label>
              <input type="email" className="contact-input" />
            </div>
            <div className="contact-field-group-item mt-4 md:mt-0">
              <label className="contact-label">Phone Number</label>
              <input type="text" className="contact-input" />
            </div>
          </div>
          <div>
            <label className="contact-label">Message</label>
            <textarea placeholder='Type your message here...' className="contact-input" rows="5"></textarea>
          </div>
          <div className="contact-checkbox-group">
            <input type="checkbox" className="contact-checkbox" />
            <label className="contact-checkbox-label">I accept the terms</label>
          </div>
        </div>
        <div className="contact-submit">
          <button className="contact-submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
