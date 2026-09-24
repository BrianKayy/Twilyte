import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import twilyteLogo from './images/twilyte-logo.jpeg';
export function Brand() {
  return <span className="wordmark"><img className="brand-logo" src={twilyteLogo} alt="Twilyte" width="1080" height="1080" /></span>;
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    const key = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);
  return <header className="navbar"><div className="nav-container shell"><Link to="/" aria-label="Twilyte home"><Brand /></Link><nav id="primary-navigation" aria-label="Main navigation" className={`nav-links ${open ? 'is-open' : ''}`}><NavLink to="/" end>Home</NavLink><NavLink to="/services">Expertise</NavLink><Link to="/#studio">The studio</Link><Link to="/contact" className="nav-cta">Let's talk <ArrowUpRight size={17} /></Link></nav><button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}
