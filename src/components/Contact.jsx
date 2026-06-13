import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="eyebrow">Contact Us</p>
        <h1>We’d love to hear from you.</h1>
        <p className="contact-intro">
          Whether you want to share feedback, ask about the app, or just say hello, our team is
          always happy to help.
        </p>
      </section>

      <section className="contact-grid">
        <article className="contact-card">
          <h3>Customer Support</h3>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@foodflow.dev</p>
          <p>🕒 Mon–Sat, 9:00 AM to 8:00 PM</p>
        </article>

        <article className="contact-card">
          <h3>Head Office</h3>
          <p>🏢 12, Food Street, Bengaluru</p>
          <p>📍 Karnataka, India</p>
          <p>📬 P.O. Box 40201</p>
        </article>

        <article className="contact-card highlight-card">
          <h3>Need a quick reply?</h3>
          <p>Drop us a message and we’ll get back to you with the best next step for your query.</p>
        </article>
      </section>
    </div>
  );
};

export default Contact;