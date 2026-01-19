import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home.css";

const cards = [
  { id: 1, name: "Person 1", img: "https://i.pravatar.cc/300?img=20", rating: 5 },
  { id: 2, name: "Person 2", img: "https://i.pravatar.cc/300?img=21", rating: 4.5 },
  { id: 3, name: "Person 3", img: "https://i.pravatar.cc/300?img=22", rating: 4 },
  { id: 4, name: "Person 4", img: "https://i.pravatar.cc/300?img=23", rating: 5 },
  { id: 5, name: "Person 5", img: "https://i.pravatar.cc/300?img=24", rating: 3.5 },
  { id: 6, name: "Person 6", img: "https://i.pravatar.cc/300?img=25", rating: 4 },
  { id: 7, name: "Person 7", img: "https://i.pravatar.cc/300?img=26", rating: 4.5 },
  { id: 8, name: "Person 8", img: "https://i.pravatar.cc/300?img=27", rating: 5 },
  { id: 9, name: "Person 9", img: "https://i.pravatar.cc/300?img=28", rating: 4 },
];

export default function Reviews() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    infinite: true,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <h1 className="heading" align="center">
        Testimonials
      </h1>

      <div className="carousel-container">
        <Slider {...settings}>
          {cards.map((c) => (
            <div key={c.id} className="slide-padding">
              <div className="card">
                <img src={c.img} alt={c.name} />
                <p className="person-name">{c.name}</p>
                <Stars rating={c.rating} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

/* ---------- Stars Component ---------- */

function Stars({ rating }) {
  const total = 5;

  return (
    <div className="stars">
      {Array.from({ length: total }).map((_, i) => {
        const full = i + 1 <= Math.floor(rating);
        const half = rating % 1 !== 0 && i + 1 === Math.ceil(rating);

        return (
          <span
            key={i}
            className={`star ${full ? "full" : ""} ${half ? "half" : ""}`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
