import "../Home.css";
import ServicePreview from "./Service_preview";
import { motion } from "framer-motion";
import GuidedPause from "./GuidedPause";
import iceImg from "./ice bath.jpeg";
import jacuzziImg from "./jacuzzi.jpeg";
import steamImg from "./steam bath.jpeg";

const items = [
  {
    title: "Science-Backed Recovery",
    desc: "Evidence-led therapies for real results",
    icon: "🧬",
    pos: "one",
  },
  {
    title: "Trained Professionals",
    desc: "Guided by certified wellness experts",
    icon: "👤",
    pos: "two",
  },
  {
    title: "Hygienic & Premium Setup",
    desc: "Clean, safe, spa-grade environment",
    icon: "🛁",
    pos: "three",
  },
  {
    title: "Community-Driven Wellness",
    desc: "Heal, grow, and thrive together",
    icon: "💜",
    pos: "four",
  },
];

export default function Home() {
  return (
    <>
    
<GuidedPause></GuidedPause>
    <section className="why-wrap"id="why-chill-thrive">
      <h2 className="why-title">Why Chill Thrive</h2>

      <div className="why-field">
        {items.map((it, i) => (
          <div className={`why-item ${it.pos}`}>
  <motion.div
    className="why-inner"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.15, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
  >
    <div className="why-icon">
      <span>{it.icon}</span>
    </div>

    <h3>{it.title}</h3>
    <p>{it.desc}</p>
  </motion.div>
</div>

        ))}
      </div>
    </section>
     <ServicePreview></ServicePreview>
    </>
  );
}

