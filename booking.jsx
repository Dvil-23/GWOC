import { useState } from "react";
import "./App.css";

export default function Booking() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  function handleSubmit(e) {
    e.preventDefault();

    // This is where backend API will go later
    console.log({
      service,
      date,
      time,
      details,
    });

    alert("Booking confirmed! Confirmation email will be sent.");
  }

  return (
    <main className="content-page booking-page">
      <section className="page-hero">
        <h1>Book a Session</h1>
        <p>
          Schedule your recovery session in a few simple steps.
        </p>
      </section>

      <form className="booking-form" onSubmit={handleSubmit}>

        {/* SERVICE */}
        <div className="form-group">
          <label>Select Service</label>
          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Choose a service</option>
            <option>Ice Bath Therapy</option>
            <option>Jacuzzi Therapy</option>
            <option>Steam Bath</option>
            <option>Ice Bath + Steam</option>
            <option>Ice Bath + Jacuzzi</option>
            <option>Full Recovery Combo</option>
          </select>
        </div>

        {/* DATE */}
        <div className="form-group">
          <label>Select Date</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* TIME */}
        <div className="form-group">
          <label>Select Time Slot</label>
          <div className="time-grid">
            {timeSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                className={`time-slot ${time === slot ? "active" : ""}`}
                onClick={() => setTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* USER DETAILS */}
        <div className="form-group">
          <label>Name</label>
          <input
            required
            type="text"
            value={details.name}
            onChange={(e) =>
              setDetails({ ...details, name: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            required
            type="tel"
            value={details.phone}
            onChange={(e) =>
              setDetails({ ...details, phone: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            required
            type="email"
            value={details.email}
            onChange={(e) =>
              setDetails({ ...details, email: e.target.value })
            }
          />
        </div>

        {/* PAYMENT */}
        <div className="form-group">
          <label>Payment Method</label>
          <select>
            <option>Pay at Venue (Cash)</option>
            <option>UPI / QR Payment</option>
          </select>

          <p className="payment-note">
            Online payment confirmation may be requested at the venue.
          </p>
        </div>

        {/* SUBMIT */}
        <button className="btn btn-primary full-width">
          Confirm Booking
        </button>

      </form>
    </main>
  );
}
