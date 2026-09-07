import { Link } from "react-router-dom";
import "./Footer.css";
import {FaInstagram, FaLinkedin,FaEnvelope} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>📖 Book Library</h3>
          <p>Discover your next favorite book with us.</p>
        </div>

        <div className="footer-socials">
          <Link
            to="https://instagram.com/kannu_sharma_0_0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer-link"/>
          </Link>

          <Link
  to="https://www.linkedin.com/in/ghanshyam-sharma-8912a941a"
  target="_blank"
  rel="noopener noreferrer"
>
            <FaLinkedin className="footer-link"/>  
  
</Link>

          <Link to="mailto:kannusharma6561@gmail.com@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="footer-link"/>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Book Library. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;