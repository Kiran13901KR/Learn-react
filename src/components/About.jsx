import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="eyebrow">About Our Food App</p>
        <h1>Discover, order, and enjoy your favorite meals with a smooth modern experience.</h1>
        <p className="about-intro">
          This project is a React-based food ordering learning app built with React Router, Redux,
          lazy-loaded pages, and a dark/light theme toggle. It combines restaurant browsing,
          menu exploration, and a cart flow into one simple interface.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <h3>What this app does</h3>
          <p>
            Browse restaurants, open menu details, add dishes to the cart, and switch between
            light and dark themes without leaving the page.
          </p>
        </article>

        <article className="about-card">
          <h3>Tech stack</h3>
          <ul>
            <li>React + React Router</li>
            <li>Redux Toolkit for cart state</li>
            <li>Parcel for fast development</li>
            <li>Responsive CSS and theme support</li>
          </ul>
        </article>

        <article className="about-card highlight-card">
          <h3>Why it stands out</h3>
          <p>
            The app is designed to feel friendly and polished, with clear navigation, reusable
            components, and a clean cart experience for learning and expansion.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;