import "./Hero.css";
import { Header } from "../Header";

export default function Hero() {
  return (
    <div className="hero-wrapper">

      {/* Ambient Glows */}
      <div className="hero-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="glow-3"></div>
      </div>

      

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-inner">

          <div className="hero-badge">🚀 Welcome to My Portfolio</div>

          <h2 className="hero-title">
            Crafting
            <span className="hero-title-gradient">
              Clean Code & Elegant UI
            </span>
          </h2>

          <p className="hero-subtext">
            Scroll down to see the header transform with a beautiful animation.  
            Building meaningful digital products with cloud, backend engineering, and modern UI.
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <a href="#projects" className="hero-btn-primary">View My Work</a>
            <a href="#contact" className="hero-btn-secondary">Contact Me</a>
          </div>

        </div>
      </section>

      <div className="h-screen"></div>
    </div>
  );
}
