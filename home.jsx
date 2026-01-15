import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="page">

            {/* HERO */}
            <header className="hero">
                <div className="glass-card hero-glass">
                    <div className="hero-content">
                        <h1>
                            Welcome to <span>Chill Thrive</span>
                        </h1>

                        <p className="hero-subtext">
                            Rejuvenate your body. Reset your mind.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/booking" className="btn btn-primary">
                                Book a Session
                            </Link>


                            <Link to="/services" className="btn btn-secondary">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* SERVICES PREVIEW */}
            <section className="services-preview">
                <h2>Our Recovery Services</h2>

                <div className="services-grid">
                    {[
                        {
                            title: "Ice Bath",
                            desc: "Cold immersion therapy for recovery and resilience",
                        },
                        {
                            title: "Jacuzzi",
                            desc: "Warm hydrotherapy for relaxation and circulation",
                        },
                        {
                            title: "Steam Bath",
                            desc: "Detoxifying heat therapy for relaxation",
                        },
                        {
                            title: "Combo Therapy",
                            desc: "Integrated cold and heat recovery experience",
                        },
                    ].map((service, index) => (
                        <Link to="/services" className="service-card" key={index}>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <span className="service-link">View details →</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* WHY CHILL THRIVE */}
            <section className="why-section">
                <h2>Why Chill Thrive</h2>

                <div className="why-grid">
                    <div className="why-card">
                        <h3>Science-Backed Recovery</h3>
                        <p>
                            Evidence-based protocols designed to support performance,
                            recovery, and long-term wellbeing.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Trained Professionals</h3>
                        <p>
                            Sessions guided by trained professionals to ensure
                            safety, effectiveness, and comfort.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Hygienic & Premium Setup</h3>
                        <p>
                            Premium facilities with strict hygiene standards and
                            high-quality equipment.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Community-Driven Wellness</h3>
                        <p>
                            A welcoming space for individuals committed to recovery,
                            resilience, and mindful living.
                        </p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS PREVIEW */}
            <section className="testimonials-preview">
                <h2>What Our Members Say</h2>

                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>
                            “Chill Thrive transformed my recovery routine. I feel
                            stronger, calmer, and more focused.”
                        </p>
                        <span>— Member</span>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “The guided sessions and premium setup make this the
                            best recovery experience I’ve had.”
                        </p>
                        <span>— Member</span>
                    </div>
                </div>

                <Link to="/testimonials" className="cta-link">
                    View all testimonials →
                </Link>
            </section>

            {/* FINAL CTA */}
            <section className="final-cta">
                <h2>Start Your Recovery Journey Today</h2>
                <button className="btn btn-primary">Book Your First Session</button>
            </section>

        </div>
    );
}
