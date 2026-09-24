import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function Contact() {
  const [params] = useSearchParams();
  const [prepared, setPrepared] = useState(false);
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Project enquiry: ${data.get('service') || 'Let us work together'}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\n\n${data.get('message')}`;
    window.location.href = `mailto:info@twilyte.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <section className="contact-page shell"><div className="page-heading"><p className="eyebrow"><span className="status-dot" /> LET'S MAKE SOMETHING MEANINGFUL</p><h1>Your next chapter.<br /><em>Our first conversation.</em></h1><p>Tell us what you're thinking. We'll help you find the way forward.</p></div><div className="contact-layout"><aside><h2>Great work starts<br />with a hello.</h2><a className="contact-email" href="mailto:info@twilyte.com">info@twilyte.com <ArrowUpRight size={19} /></a><p>Dubai, United Arab Emirates</p><div className="contact-options"><a href="https://wa.me/971582551269" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={16} /></a><a href="https://www.instagram.com/twilyte1" target="_blank" rel="noopener noreferrer">Find us on Instagram <ArrowUpRight size={16} /></a></div></aside><form onSubmit={submit} className="contact-form"><div className="form-row"><label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Alex Morgan" required /></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required /></label></div><div className="form-row"><label>Company<input name="company" autoComplete="organization" placeholder="Your company or brand" /></label><label>What can we help with?<input name="service" defaultValue={params.get('service') || ''} placeholder="Branding, website, marketing…" /></label></div><label>A little about your project <span>*</span><textarea name="message" placeholder="Your idea, your ambition, what you'd like to change…" rows="5" required /></label><div className="form-bottom"><p>This opens your email app with your project details ready to send.</p><button className="button" type="submit">Prepare email <ArrowUpRight size={18} /></button></div>{prepared && <p className="form-status" role="status">Your email draft is ready to open in your email app. If it didn't open, email your details directly to info@twilyte.com.</p>}</form></div></section>;
}
