import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import Skills from "../Skills/Skills";


export default function Hero() {
  const IMAGE_URL =
    "https://portfolio-57m.s3.ap-south-1.amazonaws.com/moni-removebg-preview.png";
  const RESUME_URL =
    "https://portfolio-57m.s3.ap-south-1.amazonaws.com/monish_developer.pdf";

  return (
    <div className="hero-wrapper">
      {/* Background Glows */}
      <div className="hero-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="glow-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-layout-container">
        {/* LEFT SIDE */}
        <div className="hero-left">
          {/* Animated Role */}
          <h1 className="hero-title-left">
            <TypeAnimation
              sequence={[
                "Backend Developer",
                1500,
                "Cloud Engineer",
                1500,
                "FastAPI Specialist",
                1500,
                "AWS Architect",
                1500,
                "Full-stack Developer",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="hero-typing-text"
            />
          </h1>

          {/* Professional Summary */}
          <p className="hero-summary">
            {/* → You will paste your real 6-line summary here */}
            Software Engineer with 2+ years of hands-on experience in debugging
            production systems, API development, and infrastructure
            troubleshooting across AWS environments. Proven expertise in
            resolving critical issues in live applications, optimizing system
            performance, and maintaining 24/7 production services. Strong
            analytical skills with experience in monitoring logs, identifying
            bottlenecks, and implementing fixes across multiple technology
            stacks.
          </p>

          {/* Resume Button */}
          <a href={RESUME_URL} target="_blank" className="hero-btn-resume">
            Download Resume
          </a>
        </div>

        {/* RIGHT SIDE — Profile Image */}
        <div className="hero-picture-wrapper">
          <img src={IMAGE_URL} alt="Monishwaran" className="hero-picture" />
        </div>
      </section>

      <Skills />

      <div className="h-40"></div>
    </div>
  );
}
