import "./index.css";
import {
  FaBullhorn,
  FaLaptopCode,
  FaSearch,
  FaChartLine,
  FaPaintBrush,
  FaCamera,
  FaCogs,
  FaShareAlt,
  FaGoogle,
  FaPalette,
} from "react-icons/fa";

const services = [
  {
    title: "Branding",
    icon: <FaPalette />,
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
  },
  {
    title: "Website Development",
    icon: <FaLaptopCode />,
  },
  {
    title: "Website Management",
    icon: <FaCogs />,
  },
  {
    title: "Social Media Management",
    icon: <FaShareAlt />,
  },
  {
    title: "Google Analytics",
    icon: <FaChartLine />,
  },
  {
    title: "Google Search Console",
    icon: <FaGoogle />,
  },
  {
    title: "Graphic Designing",
    icon: <FaPaintBrush />,
  },
  {
    title: "Product Photoshooting",
    icon: <FaCamera />,
  },
  {
    title: "Web Design",
    icon: <FaSearch />,
  },
];

function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((item, i) => (
          <div className="service-card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>
              Premium digital solutions tailored to grow your brand and online presence.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;