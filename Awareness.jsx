import "./App.css";

export default function Awareness() {
  return (
    <main className="content-page">
      {/* Page Header */}
      <section className="page-hero">
        <h1>Cold Therapy Awareness</h1>
        <p>
          Evidence-based education on cold immersion, recovery science,
          and safe practices — designed to help you make informed decisions.
        </p>
      </section>

      {/* What is Cold Therapy */}
      <section className="content-section">
        <h2>What Is Cold Therapy?</h2>
        <p>
          Cold therapy, also known as cryotherapy, is the controlled exposure
          of the body to cold temperatures to support recovery, reduce inflammation,
          and enhance mental resilience. Ice baths are one of the most widely
          studied and accessible forms of cold therapy.
        </p>
        <p>
          When the body is exposed to cold water, blood vessels constrict,
          helping limit inflammation and muscle soreness. Once the body
          rewarms, circulation increases — delivering oxygen and nutrients
          to recovering tissues.
        </p>
      </section>

      {/* Science Behind Ice Baths */}
      <section className="content-section">
        <h2>Science Behind Ice Baths</h2>
        <p>
          Research suggests cold water immersion may help reduce delayed-onset
          muscle soreness (DOMS), improve perceived recovery, and support
          nervous system regulation.
        </p>
        <ul>
          <li>Reduced inflammation through vasoconstriction</li>
          <li>Improved circulation during rewarming phase</li>
          <li>Activation of the parasympathetic nervous system</li>
          <li>Potential mental resilience benefits through stress adaptation</li>
        </ul>
        <p>
          While results vary by individual and protocol, consistent and
          responsible use is key to maximizing benefits.
        </p>
      </section>

      {/* Heat vs Cold Therapy */}
      <section className="content-section">
        <h2>Heat vs Cold Therapy</h2>
        <p>
          Both heat and cold therapy serve valuable but different purposes.
          Choosing the right method depends on your recovery goals.
        </p>

        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Cold Therapy</h3>
            <p>
              Best suited for acute inflammation, post-exercise recovery,
              and nervous system regulation.
            </p>
          </div>

          <div className="comparison-card">
            <h3>Heat Therapy</h3>
            <p>
              Often used for muscle relaxation, chronic stiffness,
              and increasing tissue elasticity.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Avoid */}
      <section className="content-section disclaimer">
        <h2>Who Should Avoid Ice Baths?</h2>
        <p>
          Cold immersion is not suitable for everyone. Individuals with
          cardiovascular conditions, Raynaud’s disease, uncontrolled
          hypertension, or nerve disorders should consult a medical
          professional before use.
        </p>
        <p className="medical-note">
          <strong>Medical Disclaimer:</strong> The information provided on this
          page is for educational purposes only and is not a substitute for
          professional medical advice. Always consult a qualified healthcare
          provider before beginning cold therapy.
        </p>
      </section>

      {/* Myths & Facts */}
      <section className="content-section">
        <h2>Recovery Myths & Facts</h2>

        <div className="myth">
          <h4>Myth: Longer ice baths are always better</h4>
          <p>
            <strong>Fact:</strong> Short, controlled exposure is often more
            effective and safer than prolonged sessions.
          </p>
        </div>

        <div className="myth">
          <h4>Myth: Ice baths replace proper recovery</h4>
          <p>
            <strong>Fact:</strong> Cold therapy complements sleep, nutrition,
            and active recovery — it does not replace them.
          </p>
        </div>

        <div className="myth">
          <h4>Myth: Ice baths eliminate all inflammation</h4>
          <p>
            <strong>Fact:</strong> Some inflammation is necessary for adaptation.
            Cold therapy should be used strategically.
          </p>
        </div>
      </section>
    </main>
  );
}
