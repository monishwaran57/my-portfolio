import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container bg-[#0d0d0d] text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contact Section */}
        <div>
          <h2 className="footer-title">Contact</h2>
          <p className="footer-text">📧 monarch.aws@gmail.com</p>
          <p className="footer-text">📱 +91 7868049170</p>
          <p className="footer-text">
            🏠 449 Chinnankutti Street, Thambikkottai Vadakadu, Pattukkottai Taluk, Thanjavur District, Tamil Nadu– 614704, India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="footer-title">Connect</h2>
          <div className="flex flex-col space-y-3">
            <a href="https://github.com/monishwaran57" target="_blank" rel="noreferrer" className="footer-link flex items-center gap-2">
              <FaGithub size={22} /> Github
            </a>
            <a href="https://linkedin.com/in/mongineer" target="_blank" rel="noreferrer" className="footer-link flex items-center gap-2">
              <FaLinkedin size={22} /> LinkedIn
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="footer-link flex items-center gap-2">
              <FaInstagram size={22} /> Instagram
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="footer-link flex items-center gap-2">
              <FaFacebook size={22} /> Facebook
            </a>
          </div>
        </div>

        {/* Branding */}
        <div>
          <h2 className="footer-title">About This Portfolio</h2>
          <p className="footer-text">
            Designed & built with ❤️ using React + Tailwind CSS.
          </p>
          <p className="footer-text mt-2 opacity-70">
            © {new Date().getFullYear()} Monishwaran C.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
