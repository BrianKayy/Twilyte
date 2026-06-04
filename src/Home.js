import { useState, useEffect } from "react";
import "./App.css";
import t1 from './images/t1.jpeg';
import t2 from './images/t2.jpeg';
import t3 from './images/t3.jpeg';
import t4 from './images/t4.jpeg';
import t5 from './images/t5.jpeg';
import t6 from './images/t6.jpeg';
import twt from './images/twlyt.jpeg';
import hk from './images/hk.jpeg';
import hw from './images/hw.jpeg';


const carouselImages = [
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
];

const clientLogos = [
  twt,
  hk,
  hw,
];

function Home() {
  const [index, setIndex] = useState(0);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* 1. HERO BLOG SECTION */}
      <section className="hero">
  <div className="hero-content">
    <h1>Build. Brand. Grow.</h1>

    <p>
      Twilyte is a modern digital agency specializing in branding,
      digital marketing, website development, and social media management.
      We transform ideas into powerful digital experiences.
    </p>

    <div className="hero-actions">
      <button className="primary-btn">Get Started</button>
      <button className="secondary-btn">View Work</button>
    </div>
  </div>
</section>

      {/* 2. CAROUSEL SECTION */}
      <section className="carousel-section">
        <h2>Our Brand Showcase</h2>

        <div className="carousel">
          <img
            src={carouselImages[index]}
            alt="Twilyte showcase"
          />
        </div>

        <div className="dots">
          {carouselImages.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* 3. CLIENTS SECTION */}
      <section className="clients">
        <h2>Clients</h2>

        <div className="client-grid">
          {clientLogos.map((logo, i) => (
            <div className="client-card" key={i}>
              <img src={logo} alt="client logo" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;