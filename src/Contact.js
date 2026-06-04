import "./index.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      {/* HEADER */}
      <div className="contact-header">
        <h2>Let’s Build Something Great</h2>
        <p>
          Reach out to Twilyte — we respond quickly and help you grow your brand.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Email Address" required />

          <textarea placeholder="Your Message..." rows="6" required />

          <button type="submit">Send Message</button>
        </form>

        {/* SOCIAL */}
        <div className="contact-social">
          <h3>Connect With Us</h3>

          <div className="icons">
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

          <p>
            Follow us for updates, case studies, and marketing insights.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;