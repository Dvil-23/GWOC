import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./App.css";

export default function App() {
  return (
    <div className="page">
      {/* Hero */}
      <header className="hero">
        <div className="glass-card">
          <div className="hero-content">
            <h1>
              Welcome to <span>Chill Thrive</span>
            </h1>

            <h2 className="tagline">
              Where Recovery Meets Resilience
            </h2>

            <p>
              Chill Thrive delivers premium cold immersion systems designed to support
              physical recovery, mental clarity, and long-term performance —
              grounded in science and built for everyday use.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Ice Baths</button>
              <button className="btn btn-secondary">Our Science</button>
            </div>
          </div>
        </div>
      </header>



      {/* Features */}
      <section className="features">
        <h2>Why Ice Baths?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Faster Recovery</h3>
            <p>Reduce muscle soreness and speed up post-workout recovery.</p>
          </div>
          <div className="feature-card">
            <h3>Built to Last</h3>
            <p>Durable materials, insulation, and weather-ready design.</p>
          </div>
          <div className="feature-card">
            <h3>Mental Resilience</h3>
            <p>Build discipline and mental toughness through cold exposure.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Take the Plunge?</h2>
        <p>Join thousands using cold immersion to elevate their performance.</p>
        <a href="#get-started" className="cta-link">Get Started</a>

      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} PolarFlow. All rights reserved.
      </footer>
    </div>
  );
}
