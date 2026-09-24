import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import './index.css';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';
import Contact from './Contact';
function ScrollToPage() {
  const {
    pathname,
    hash
  } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <BrowserRouter><ScrollToPage /><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<section className="page-heading shell"><p className="eyebrow">404 / A little off course</p><h1>Let's find your<br /><em>way back.</em></h1><Link to="/" className="button">Back to home ↗</Link></section>} /></Routes></main><Footer /></BrowserRouter>;
}
