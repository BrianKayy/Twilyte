import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Brand } from './Navbar';
export default function Footer() {
  return <footer className="footer"><div className="shell"><div className="footer-main"><div><Link to="/" aria-label="Twilyte home"><Brand /></Link><p>Independent minds. Meaningful impact.</p></div><div className="footer-links"><Link to="/services">Expertise</Link><Link to="/#studio">The studio</Link><Link to="/contact">Contact</Link></div><div className="footer-contact"><a href="mailto:info@twilyte.com">info@twilyte.com <ArrowUpRight size={15} /></a><p>Dubai, United Arab Emirates</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Twilyte. All rights reserved.</span><a href="https://www.instagram.com/twilyte1" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={13} /></a><span>BUILD. BRAND. GROW.</span></div></div></footer>;
}
