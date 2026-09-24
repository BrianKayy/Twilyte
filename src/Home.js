import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, Asterisk } from 'lucide-react';
import t1 from './images/t1.jpeg';
import t2 from './images/t2.jpeg';
import t3 from './images/t3.jpeg';
import t4 from './images/t4.jpeg';
import t5 from './images/t5.jpeg';
import t6 from './images/t6.jpeg';
import poreh from './images/clients/poreh.jpeg';
import aureon from './images/clients/aureon-international.png';
import hkFitness from './images/clients/hk-fitness.jpeg';
import rifinela from './images/clients/rifinela.jpeg';
const clients = [
  { name: 'POREH', logo: poreh },
  { name: 'Aureon International', logo: aureon },
  { name: 'HK Fitness', logo: hkFitness },
  { name: 'Rifinela', logo: rifinela },
];
const images = [t6, t1, t2, t3, t4, t5];
const expertise = [['01', 'Brand identities', 'Distinct by design.', 'Strategy, identity, and visual storytelling that make your brand unmistakably yours.'], ['02', 'Digital experiences', 'Built to connect.', 'Thoughtful websites that bring together beautiful design and effortless functionality.'], ['03', 'Marketing & growth', 'Made to move you forward.', 'Purposeful campaigns, compelling content, and social strategies that connect with your audience.']];
export default function Home() {
  const [index, setIndex] = useState(0);
  return <div className="home">
<section className="hero shell"><div className="hero-topline"><p className="eyebrow"><span className="status-dot" /> Independent digital agency</p><span className="location-label">DUBAI, UAE · THINKING BEYOND BORDERS</span></div><div className="hero-layout"><div className="hero-content"><h1>Built to stand out.<br />Designed to<br /><em>make a mark.</em></h1><p className="hero-description">We bring ambitious brands to life through thoughtful design, digital experiences, and marketing that moves people.</p><div className="hero-actions"><Link className="button" to="/contact">Start a conversation <ArrowUpRight size={19} /></Link><a className="text-link" href="#expertise">Explore our expertise <ArrowDown size={16} /></a></div></div><div className="hero-art" aria-hidden="true"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbit orbit-four" /><div className="art-core" /><span className="art-star">✳</span><span className="art-label">A NEW PERSPECTIVE.</span><span className="art-coordinates">25.2048° N<br />55.2708° E</span></div></div><div className="hero-bottom"><span>STRATEGY MEETS CREATIVITY.</span><span>YOUR NEXT CHAPTER STARTS HERE.</span><a href="#expertise" aria-label="Scroll to expertise"><ArrowDown size={19} /></a></div></section>
<div className="discipline-strip"><div className="shell"><span>Build with purpose</span><Asterisk /><span>Brand with character</span><Asterisk /><span>Grow with intention</span><Asterisk /></div></div>
<section className="expertise-section section-pad shell" id="expertise"><div className="section-heading"><div><p className="eyebrow">01 / What we do</p><h2>Big-picture thinking.<br /><em>Every little detail.</em></h2></div><div className="heading-aside"><p>From the first idea to your next big move.<br />One creative partner, every step of the way.</p><Link className="text-link" to="/services">Discover our services <ArrowUpRight size={17} /></Link></div></div><div className="expertise-grid">{expertise.map(([number, title, subtitle, description]) => <Link className="expertise-card" to="/services" key={number}><div className="card-top"><span>{number}</span><ArrowUpRight size={23} /></div><h3>{title}</h3><p className="card-subtitle">{subtitle}</p><p>{description}</p></Link>)}</div></section>
<section className="studio-section section-pad" id="studio"><div className="shell"><div className="section-heading"><div><p className="eyebrow">02 / The people behind the thinking</p><h2>Different perspectives.<br /><em>One shared ambition.</em></h2></div><p className="heading-aside">We're Twilyte. A Dubai-based digital agency bringing strategy, design, and technology together to build what's next for your brand.</p></div><div className="studio-image"><img src={images[index]} alt={`A look inside the Twilyte studio, view ${index + 1}`} loading="lazy" /><div className="image-caption"><span>INSIDE TWILYTE <span className="caption-divider">/</span> CREATIVE MINDS AT WORK</span><div className="gallery-controls"><button aria-label="Previous studio image" onClick={() => setIndex((index + images.length - 1) % images.length)}><ArrowLeft size={18} /></button><span aria-live="polite">0{index + 1} / 0{images.length}</span><button aria-label="Next studio image" onClick={() => setIndex((index + 1) % images.length)}><ArrowRight size={18} /></button></div></div></div><div className="studio-values"><p><span>Strategy first.</span>Every decision starts with understanding your business.</p><p><span>Craft always.</span>The details make the difference. We care about all of them.</p><p><span>Better together.</span>Your ambition becomes our shared direction.</p></div></div></section>
<section className="clients-section section-pad shell" id="clients" aria-labelledby="clients-title">
  <div className="section-heading">
    <div>
      <p className="eyebrow">03 / Our clients</p>
      <h2 id="clients-title">Great brands.<br /><em>Shared ambition.</em></h2>
    </div>
    <p className="heading-aside">A few of the brands we're proud to work with.</p>
  </div>
  <ul className="client-grid">
    {clients.map(client => (
      <li className="client-card" key={client.name}>
        <div className="client-logo-panel">
          <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
        </div>
        <p>{client.name}</p>
      </li>
    ))}
  </ul>
</section>
<section className="cta-section shell"><p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p><Link to="/contact" className="big-cta">Let's make<br /><em>your next move.</em><span><ArrowUpRight /></span></Link><p>A new brand. A better website. A bigger possibility.</p></section></div>;
}
