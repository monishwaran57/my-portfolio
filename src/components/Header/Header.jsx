import { useState, useEffect } from "react";
import "./Header.css";
import Menu from "./Menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-wrapper ${
        scrolled ? "header-scrolled" : "header-default"
      }`}
    >
      {/* Gradient glow line under header */}
      <div className="header-bottom-glow"></div>

      <div className="header-inner">
        {/* Logo */}
        <a href="#home">
          <h1 className="header-logo">Monishwaran</h1>
        </a>

        {/* Menu */}
        <Menu />
      </div>
    </header>
  );
};

export default Header;
