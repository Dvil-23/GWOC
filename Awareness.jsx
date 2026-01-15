import "./App.css";
import { Link } from "react-router-dom";

export default function Awareness() {
  return (
    <main className="content-page awareness-page">

      {/* PAGE HEADER */}
      <section className="page-hero">
        <h1>Cold Therapy Awareness</h1>
        <p>
          Clear, science-backed guidance on cold therapy —
          so you can recover smarter and safer.
        </p>
      </section>

      {/* WHAT IS COLD THERAPY */}
      <section className="content-section">
        <h2>What Is Cold Therapy?</h2>

        <p>
          Cold therapy (cryotherapy) is the controlled exposure to cold
          temperatures to support recovery, reduce inflammation, and
          strengthen mental resilience.
        </p>

        <p>
          Ice baths are one of the most effective and accessible forms
          of cold therapy.
        </p>

        <ul>
          <li>Cold constricts blood vessels, reducing inflammation</li>
          <li>Rewarming boosts circulation and oxygen delivery</li>
          <li>The nervous system shifts into a calmer, regulated state</li>
        </ul>
      </section>

      {/* SCIENCE */}
      <section className="content-section">
        <h2>Science Behind Ice Baths</h2>

        <p>
          Research suggests cold water immersion can support recovery
          and nervous system balance when used responsibly.
        </p>

        <ul>
          <li>Reduced muscle soreness (DOMS)</li>
          <li>Improved circulation during rewarming</li>
          <li>Activation of the parasympathetic “rest & recover” system</li>
          <li>Improved stress tolerance over time</li>
        </ul>

        <p className="note">
          Results vary by individual — consistency and moderation matter most.
        </p>
      </section>

      {/* HEAT VS COLD */}
      <section className="content-section">
        <h2>Heat vs Cold Therapy</h2>

        <p>
          Both heat and cold therapy are useful. The key is choosing
          the right method at the right time.
        </p>

        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Cold Therapy</h3>
            <p>
              Best for post-exercise recovery, inflammation,
              and nervous system regulation.
            </p>
          </div>

          <div className="comparison-card">
            <h3>Heat Therapy</h3>
            <p>
              Ideal for muscle relaxation, chronic stiffness,
              and improving mobility.
            </p>
          </div>
        </div>
      </section>

      {/* WHO SHOULD AVOID */}
      <section className="content-section disclaimer">
        <h2>Who Should Avoid Ice Baths?</h2>

        <p>Cold immersion may not be suitable if you have:</p>

        <ul>
          <li>Cardiovascular conditions</li>
          <li>Raynaud’s disease</li>
          <li>Uncontrolled blood pressure</li>
          <li>Nerve-related disorders</li>
        </ul>

        <p className="medical-note">
          <strong>Medical Disclaimer:</strong> This content is for educational
          purposes only and does not replace professional medical advice.
        </p>
      </section>

      {/* MYTHS & FACTS */}
      <section className="content-section myths-section">
        <h2>Recovery Myths & Facts</h2>

        <div className="myth-grid">
          <div className="myth-card">
            <h4>Myth</h4>
            <p>Longer ice baths are always better</p>
            <span>Fact</span>
            <p>Short, controlled exposure is safer and more effective</p>
          </div>

          <div className="myth-card">
            <h4>Myth</h4>
            <p>Ice baths replace proper recovery</p>
            <span>Fact</span>
            <p>They complement sleep, nutrition, and active recovery</p>
          </div>

          <div className="myth-card">
            <h4>Myth</h4>
            <p>Ice baths eliminate all inflammation</p>
            <span>Fact</span>
            <p>Some inflammation is necessary for adaptation</p>
          </div>
        </div>
      </section>


      {/* MICRO CTA */}
      <section className="content-section micro-cta">
        <h3>Experience guided recovery, the right way</h3>
        <Link to="/services" className="cta-link">
          Explore our recovery services →
        </Link>
      </section>

    </main>
  );
}
