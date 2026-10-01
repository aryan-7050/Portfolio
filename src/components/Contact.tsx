import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        {/* Availability Badge */}
        <div className="contact-availability">
          <span className="contact-dot"></span>
          Available for opportunities
        </div>

        <div className="contact-flex">
          {/* Left — Get in touch */}
          <div className="contact-box">
            <h4>Get in Touch</h4>
            <p>
              <a href="mailto:aryanpatil7050@gmail.com" data-cursor="disable">
                aryanpatil7050@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+918554015600" data-cursor="disable">
                +91 85540 15600
              </a>
            </p>
            <h4>Location</h4>
            <p style={{ opacity: 0.7 }}>Kolhapur India</p>
          </div>

          {/* Middle — Social */}
          <div className="contact-box">
            <h4>Connect</h4>
            <a
              href="https://github.com/aryanpatil7050"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aryanpatil7050"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/aryanpatil7050"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/aryanpatil7050"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Right — Signature */}
          <div className="contact-box contact-signature">
            <h2>
              Let's build something
              <br />
              <span>great together.</span>
            </h2>
            <p className="contact-note">
              Currently seeking full-time roles as a{" "}
              <strong>Full Stack Developer</strong>.
            </p>
            <h5>
              <MdCopyright /> 2026 — Designed &amp; Developed by{" "}
              <span className="contact-name">Aryan Patil</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;