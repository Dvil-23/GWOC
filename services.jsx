import "./App.css";
import { Link } from "react-router-dom";


export default function Services() {
  return (
    <main className="content-page">

      {/* PAGE HEADER */}
      <section className="page-hero">
        <h1>Our Recovery Services</h1>
        <p>
          Science-backed therapies designed to help you recover faster,
          feel better, and perform at your best.
        </p>
      </section>

      {/* ICE BATH */}
      <section className="service-detail service-ice">
        <div className="service-text">
          <h2>Ice Bath Therapy</h2>
          <p>
            Cold immersion therapy designed to reduce inflammation,
            improve circulation, and enhance mental toughness.
          </p>

          <h4>Benefits</h4>
          <ul>
            <li>Muscle recovery</li>
            <li>Reduced soreness</li>
            <li>Improved focus</li>
            <li>Stress regulation</li>
          </ul>

          <div className="service-meta">
            <p><strong>Duration:</strong> 30 min / 60 min</p>
            <p><strong>Price:</strong> ₹XXX / session</p>
          </div>

          <Link to="/booking" state={{ service: "Ice Bath Therapy" }} className="btn btn-primary">
            Book Now
          </Link>
        </div>

        <div className="service-media">
          <div className="media-placeholder">Ice Bath Image / Video</div>
        </div>
      </section>

      {/* JACUZZI */}
      <section className="service-detail service-jacuzzi reverse">
        <div className="service-text">
          <h2>Jacuzzi Therapy</h2>
          <p>
            Warm hydrotherapy designed for muscle relaxation
            and nervous system calm.
          </p>

          <h4>Benefits</h4>
          <ul>
            <li>Muscle relaxation</li>
            <li>Improved blood flow</li>
            <li>Stress relief</li>
          </ul>

          <div className="service-meta">
            <p><strong>Duration:</strong> 30 min / 60 min</p>
            <p><strong>Price:</strong> ₹XXX / session</p>
          </div>

          <Link to="/booking" state={{ service: "Jacuzzi Therapy" }} className="btn btn-primary">
            Book Now
          </Link>
        </div>

        <div className="service-media">
          <div className="media-placeholder">Jacuzzi Image / Video</div>
        </div>
      </section>

      {/* STEAM */}
      <section className="service-detail service-steam">
        <div className="service-text">
          <h2>Steam Bath</h2>
          <p>
            Detoxifying heat therapy that supports relaxation,
            respiratory health, and skin rejuvenation.
          </p>

          <h4>Benefits</h4>
          <ul>
            <li>Detoxification</li>
            <li>Skin rejuvenation</li>
            <li>Mental relaxation</li>
          </ul>

          <div className="service-meta">
            <p><strong>Duration:</strong> 30 min / 60 min</p>
            <p><strong>Price:</strong> ₹XXX / session</p>
          </div>

          <Link to="/booking" state={{ service: "Steam Bath" }} className="btn btn-primary">
            Book Now
          </Link>
        </div>

        <div className="service-media">
          <div className="media-placeholder">Steam Bath Image / Video</div>
        </div>
      </section>

      {/* COMBO PACKAGES */}
      <section className="combo-section">
        <h2>Combo Recovery Packages</h2>

        <div className="combo-grid">

          <div className="combo-card">
            <span className="badge">Popular</span>
            <h3>Ice Bath + Steam</h3>
            <p>Time Included: 60 min</p>
            <div className="combo-price">
              <p className="price-old">₹XXXX</p>
              <p className="price-new">₹XXXX</p>
            </div>

            <Link to="/booking" state={{ service: "Ice Bath + Steam" }} className="btn btn-primary">
              Book Now
            </Link>
          </div>

          <div className="combo-card">
            <h3>Ice Bath + Jacuzzi</h3>
            <p>Time Included: 60 min</p>
            <div className="combo-price">
              <p className="price-old">₹XXXX</p>
              <p className="price-new">₹XXXX</p>
            </div>

            <Link to="/booking" state={{ service: "Ice Bath + Jacuzzi" }} className="btn btn-primary">
              Book Now
            </Link>
          </div>

          <div className="combo-card best">
            <span className="badge">Best Value</span>
            <h3>Full Recovery Combo</h3>
            <p>Ice Bath + Steam + Jacuzzi</p>
            <p>Time Included: 90 min</p>
            <div className="combo-price">
              <p className="price-old">₹XXXX</p>
              <p className="price-new">₹XXXX</p>
            </div>

            <Link to="/booking" state={{ service: "Full Recovery Combo" }} className="btn btn-primary">
              Book Now
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
